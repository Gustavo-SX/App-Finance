import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Botao from '../components/button';
import RedefinicaoStyle from '../css/cssRedefinicao';
import Logo from '../image/logo';
import { useNavigation } from '@react-navigation/native';



const Redefinicao = () => {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation<any>();
  return (
    <LinearGradient
      colors={['#000000', '#0D1B2A']}
      style={RedefinicaoStyle.container}
    >
      <Logo />

      <Text style={RedefinicaoStyle.title}>
        Digite seu email no campo abaixo que enviaremos um link de redefinição de senha!
      </Text>

      <View style={RedefinicaoStyle.inputContainer}>
        <TextInput
          style={RedefinicaoStyle.input}
          placeholder="Digite seu Gmail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Botao 
        title="Enviar"
        onPress={() => navigation.navigate('Reset')}
      />

    </LinearGradient>
  );
}

export default Redefinicao;