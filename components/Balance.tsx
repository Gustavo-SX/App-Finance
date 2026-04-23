import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../css/cssHome";

type Props = {
  saldo: number;
};

export default function Balance({ saldo }: Props) {
  const [visible, setVisible] = useState(true);

  const formatted = saldo
    .toFixed(2)
    .replace(".", ",");

  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceLabel}>Saldo disponível</Text>

      <View style={styles.balanceRow}>
        <Text style={styles.balanceCurrency}>R$</Text>

        <Text style={styles.balanceValue}>
          {visible ? formatted : "••••••"}
        </Text>

        <TouchableOpacity
          style={styles.balanceEyeButton}
          onPress={() => setVisible((v) => !v)}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 18, opacity: 0.6 }}>
            {visible ? "👁️" : "🙈"}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 18,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View
            style={{
              width: 7,
              height: 7,
              borderRadius: 4,
              backgroundColor: "#10B981",
            }}
          />
          <Text style={{ color: "#475569", fontSize: 12, fontWeight: "500" }}>
            Entrada{" "}
            <Text style={{ color: "#10B981", fontWeight: "700" }}>
              R$ 3.500
            </Text>
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View
            style={{
              width: 7,
              height: 7,
              borderRadius: 4,
              backgroundColor: "#F87171",
            }}
          />
          <Text style={{ color: "#475569", fontSize: 12, fontWeight: "500" }}>
            Saída{" "}
            <Text style={{ color: "#F87171", fontWeight: "700" }}>
              R$ 2.300
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}