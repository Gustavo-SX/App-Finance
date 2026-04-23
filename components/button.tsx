import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';
import Botaocss from '../css/cssbutton';

type Props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

const Botao = ({ title, onPress, style }: Props) => {
  return (
    <TouchableOpacity style={[Botaocss.botao, style]} onPress={onPress}>
      <Text style={Botaocss.texto}>{title}</Text>
    </TouchableOpacity>
  );
}


export default Botao;