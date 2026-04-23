import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Botao from '../components/button';
import LoginStyle from '../css/Logincss';
import Logo from '../image/logo';
import { useNavigation } from '@react-navigation/native';
import { loginUsuario } from '../services/auth';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const navigation = useNavigation<any>();

  const handleLogin = async () => {
  try {
    if (!email || !senha) {
      alert("Preencha tudo");
      return;
    }

    await loginUsuario(email, senha);

    alert("Login realizado!"); 
    navigation.reset({
   index: 0,
   routes: [{ name: 'Main' }],
   });

  } catch (err: any) {
    alert(err.message);
  }
};
  return (
    <LinearGradient
      colors={['#000000', '#0D1B2A']}
      style={LoginStyle.container}
    >
      <Logo />

      <Text style={LoginStyle.title}>
        Bem Vindo ao FinanApp
      </Text>

      <View style={LoginStyle.inputContainer}>
        <TextInput
          style={LoginStyle.input}
          placeholder="Digite seu Gmail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={LoginStyle.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

  
      <Botao 
        title="Entrar"
        onPress={handleLogin}
      />

      <Text 
        style={LoginStyle.link}
        onPress={() => navigation.navigate('Redefinicao')}
      >
        Esqueceu a senha?
      </Text>

    </LinearGradient>
  );
}