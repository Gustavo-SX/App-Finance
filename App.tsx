import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

export default function App() {
  const [data, setData] = useState([
    { label: "Comida", value: 3000, color: "#34D399" },
    { label: "Transporte", value: 2000, color: "#60A5FA" },
    { label: "Eletricidade", value: 1500, color: "#FDE68A" },
  ]);

  const [selected, setSelected] = useState(null);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const radius = 80;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;

  const addItem = () => {
    if (!label || !value) return;

    const newItem = {
      label,
      value: parseFloat(value),
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    };

    setData([...data, newItem]);
    setLabel("");
    setValue("");
  };

  return (
    <LinearGradient
      colors={["#000000", "#0D1B2A"]}
      style={styles.container}
    >
      {/* 🔙 Botão voltar (não funcional ainda) */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      <Text style={styles.header}>ANÁLISE DE GASTOS</Text>

      {/* GRÁFICO */}
      <View style={styles.chartContainer}>
        <Svg width={250} height={250}>
          <Defs>
            <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
              <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <Stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </RadialGradient>
          </Defs>

          <Circle cx="125" cy="125" r="95" fill="url(#glow)" />

          <Circle
            cx="125"
            cy="125"
            r={radius}
            stroke="#111827"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {data.map((item, index) => {
            const percent = item.value / total;
            const dash = circumference * percent;

            const circle = (
              <Circle
                key={index}
                cx="125"
                cy="125"
                r={radius}
                stroke={item.color}
                strokeWidth={selected === index ? 26 : strokeWidth}
                fill="none"
                strokeDasharray={`${dash} ${circumference}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                rotation="-90"
                origin="125,125"
                opacity={selected === null || selected === index ? 1 : 0.3}
              />
            );

            offset += dash;
            return circle;
          })}
        </Svg>
      </View>

      {/* TOTAL */}
      <Text style={styles.amount}>
        {total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>

      {/* LISTA */}
      <View style={styles.infoContainer}>
        {data.map((item, index) => {
          const percent = ((item.value / total) * 100).toFixed(1);

          return (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() =>
                setSelected(selected === index ? null : index)
              }
            >
              <View style={[styles.dot, { backgroundColor: item.color }]} />

              <Text style={styles.label}>
                {item.label} ({percent}%)
              </Text>

              <Text style={styles.value}>
                -{item.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Categoria"
          placeholderTextColor="#888"
          style={styles.input}
          value={label}
          onChangeText={setLabel}
        />
        <TextInput
          placeholder="Valor"
          placeholderTextColor="#888"
          keyboardType="numeric"
          style={styles.input}
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={{ color: "#fff" }}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 10,
  },

  backText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  header: {
    color: "#0003A9",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  chartContainer: {
    alignItems: "center",
  },

  amount: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },

  infoContainer: {
    marginTop: 10,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },

  label: {
    color: "#fff",
    flex: 1,
  },

  value: {
    color: "#9CA3AF",
  },

  inputContainer: {
    marginTop: 20,
  },

  input: {
    backgroundColor: "#1f2937",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});