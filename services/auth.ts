import { supabase } from "./supabase";

type CadastroProps = {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  nascimento: string;
};

export async function cadastrarUsuario({
  nome,
  email,
  telefone,
  senha,
  nascimento,
}: CadastroProps) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha,
  });

  if (error) throw error;

  if (!data.user) {
    throw new Error("Erro ao criar usuário");
  }

  
  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      nome,
      telefone,
      nascimento,
    })
    .eq("id", data.user.id);

  if (updateError) throw updateError;

  return data.user;
}

export async function loginUsuario(email: string, senha: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: senha,
  });

  if (error) throw error;

  return data.user;
}