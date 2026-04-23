import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from '../css/cssResetSucess'

export default function ResetSuccess() {
  return (
    <LinearGradient
      colors={["#000000", "#0D1B2A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        
        <Image
          source={require("../image/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Email enviado!
        </Text>

        <Text style={styles.message}>
          Enviamos um link de recuperação para o Gmail informado.
          Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
        </Text>

      </View>
    </LinearGradient>
  );
}