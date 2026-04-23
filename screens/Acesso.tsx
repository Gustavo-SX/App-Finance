import React from "react";
import styles from "../css/cssAcesso";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Logo from '../image/logo'
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';


export default function Acesso() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={["#000000", "#0D1B2A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../image/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>FinanApp</Text>
        <Text style={styles.subtitle}>
          O aplicativo de finanças ideal para você.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        
        
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.signupText}>Criar conta</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
}