import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../css/cssHome";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text
          style={{
            color: "#475569",
            fontSize: 13,
            fontWeight: "500",
            marginBottom: 2,
          }}
        >
          Olá 👋
        </Text>
        <Text
          style={{
            color: "#E2E8F0",
            fontSize: 18,
            fontWeight: "700",
            letterSpacing: 0.2,
          }}
        >
          Gustavo
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            backgroundColor: "#131929",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.07)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>🔔</Text>
        </TouchableOpacity>

        <Image source={require("../image/logo.png")} style={styles.logo} />
      </View>
    </View>
  );
}
