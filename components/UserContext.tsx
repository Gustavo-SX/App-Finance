import React, { createContext, useState, useContext } from 'react';

// ✅ tipagem do contexto
interface UserContextData {
  nome: string;
  setNome: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
}

// ✅ tipagem correta (null em vez de any)
const UserContext = createContext<UserContextData | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [nome, setNome] = useState("gustavo");
  const [email, setEmail] = useState("example@email.com");
  const [phone, setPhone] = useState("+44 555 5555 55");

  return (
    <UserContext.Provider
      value={{
        nome,
        setNome,
        email,
        setEmail,
        phone,
        setPhone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// ✅ hook seguro
export const useUser = (): UserContextData => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }

  return context;
};