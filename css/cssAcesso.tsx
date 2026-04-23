import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

type Styles = {
  container: ViewStyle;
  logoContainer: ViewStyle;
  logo: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
  buttonContainer: ViewStyle;
  loginButton: ViewStyle;
  loginText: TextStyle;
  signupButton: ViewStyle;
  signupText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },

  logoContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop:250
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#10B981",
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 8,
    fontSize: 18,
  },

  buttonContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom:370
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#0003A9",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
  },

  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  signupButton: {
    width: "100%",
    backgroundColor: "#0003A9",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  signupText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;