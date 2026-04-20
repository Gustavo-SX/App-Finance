import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#000000", "#0D1B2A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>FinanApp</Text>
        <Text style={styles.subtitle}>
          O aplicativo de finanças ideal para você.
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Criar conta</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },

  logoContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
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
    fontSize: 12,
  },

  buttonContainer: {
    width: "80%",
    alignItems: "center",
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