import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Loginsytle from '../css/Logincss';

const Inputs = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  return (
    <View style={Loginsytle.container}>

      <TextInput
        style={Loginsytle.input}
        placeholder="Digite seu Gmail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={Loginsytle.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#aaa"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <Text>Email: {email}</Text>
      <Text>Senha: {senha}</Text>

    </View>
  );
}

export default Inputs;