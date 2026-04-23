import { StyleSheet } from 'react-native';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  link: TextStyle;
};

const RedefinicaoStyle = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#10B981',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft:20
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  inputContainer: {
    width: '85%',
  },

  input: {
    backgroundColor: '#1B263B',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#415A77',
  },

  link: {
    color: '#00B4D8',
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default RedefinicaoStyle;