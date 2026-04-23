import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Botao from '../components/button';
import CadastroStyle from '../css/cssCadastro';
import Logo from '../image/logo';
import { useNavigation } from '@react-navigation/native';
import { cadastrarUsuario } from '../services/auth';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');

  const navigation = useNavigation<any>();

  const handleCadastro = async () => {
  try {
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    await cadastrarUsuario({
      nome,
      email,
      telefone,
      senha,
      nascimento,
    });

    alert("Conta criada com sucesso!");
    navigation.navigate("Login");

  } catch (err: any) {
    alert(err.message);
  }
};

  return (
    <LinearGradient
      colors={['#000000', '#0D1B2A']}
      style={CadastroStyle.container}
    >
      <Logo />

      <Text style={CadastroStyle.title}>
        Bem Vindo ao FinanApp
      </Text>

      <View style={CadastroStyle.inputContainer}>
        
        <TextInput
          style={CadastroStyle.input}
          placeholder="Nome completo"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={CadastroStyle.input}
          placeholder="Data de nascimento"
          placeholderTextColor="#aaa"
          value={nascimento}
          onChangeText={setNascimento}
        />

        <TextInput
          style={CadastroStyle.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={CadastroStyle.input}
          placeholder="Telefone"
          placeholderTextColor="#aaa"
          value={telefone}
          onChangeText={setTelefone}
        />

        <TextInput
          style={CadastroStyle.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <Botao title="Criar Conta" onPress={handleCadastro} />
    </LinearGradient>
  );
}