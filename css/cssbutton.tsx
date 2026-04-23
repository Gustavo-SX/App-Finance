import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type Styles = {
  botao: ViewStyle;
  texto: TextStyle;
};

const BotaoCss = StyleSheet.create<Styles>({
  botao: {
    backgroundColor: '#0003A9',
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
    width: 250,
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BotaoCss;