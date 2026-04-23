import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";
import styles from "../css/cssAnalise";

type Item = {
  label: string;
  value: number;
  color: string;
};

export default function Analise() {
  const [data, setData] = useState<Item[]>([
    { label: "Comida", value: 3000, color: "#34D399" },
    { label: "Transporte", value: 2000, color: "#60A5FA" },
    { label: "Eletricidade", value: 1500, color: "#FDE68A" },
  ]);

  const [selected, setSelected] = useState<number | null>(null);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");

  
  const total = useMemo(
    () => data.reduce((sum, item) => sum + item.value, 0),
    [data]
  );

  const radius = 80;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;

  
  const addItem = () => {
    if (!label || !value) return;

    const newItem: Item = {
      label,
      value: parseFloat(value),
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    };

    setData(prev => [...prev, newItem]);
    setLabel("");
    setValue("");
  };


  const handleSelect = (index: number) => {
    setSelected(prev => (prev === index ? null : index));
  };

  
  const renderChart = () => {
    let offset = 0;

    return data.map((item, index) => {
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
    });
  };

  return (
    <LinearGradient
      colors={["#000000", "#0D1B2A"]}
      style={styles.container}
    >
      
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      <Text style={styles.header}>ANÁLISE DE GASTOS</Text>

    
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

          {renderChart()}
        </Svg>
      </View>

    
      <Text style={styles.amount}>
        {total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>

      
      <View style={styles.infoContainer}>
        {data.map((item, index) => {
          const percent = ((item.value / total) * 100).toFixed(1);

          return (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handleSelect(index)}
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