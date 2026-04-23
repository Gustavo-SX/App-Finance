import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (card: {
    nome: string;
    numero: string;
    expiry: string;
    tipo: string;
  }) => void;
};

const BANDEIRAS = ["Visa", "Mastercard", "Elo", "American Express"];

function formatNumero(text: string) {
  const digits = text.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(text: string) {
  const digits = text.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) {
    return digits.slice(0, 2) + "/" + digits.slice(2);
  }
  return digits;
}

export default function ModalNovoCartao({ visible, onClose, onConfirm }: Props) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bandeira, setBandeira] = useState("Visa");

  const handleConfirm = () => {
    if (!nome.trim() || numero.replace(/\s/g, "").length < 16 || expiry.length < 5 || cvv.length < 3) {
      Alert.alert("Campos inválidos", "Preencha todos os campos corretamente.");
      return;
    }
    const mascarado = "**** **** **** " + numero.replace(/\s/g, "").slice(-4);
    onConfirm({ nome: nome.trim(), numero: mascarado, expiry, tipo: bandeira });
    setNome(""); setNumero(""); setExpiry(""); setCvv(""); setBandeira("Visa");
    onClose();
  };

  const inputStyle = {
    backgroundColor: "#131929",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    color: "#E2E8F0",
    fontSize: 15,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
  };

  const labelStyle = {
    color: "#475569",
    fontSize: 12,
    fontWeight: "600" as const,
    letterSpacing: 0.6,
    textTransform: "uppercase" as const,
    marginBottom: 8,
  };

  // Preview do cartão
  const numeroFormatado = numero
    ? numero.padEnd(19, "·").slice(0, 19)
    : "···· ···· ···· ····";

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }}
          activeOpacity={1}
          onPress={onClose}
        />
        <View
          style={{
            backgroundColor: "#0A0F1E",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderTopWidth: 1,
            borderColor: "rgba(255,255,255,0.07)",
            maxHeight: "90%",
          }}
        >
          <ScrollView
            contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Handle */}
            <View
              style={{
                width: 40, height: 4,
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: 2,
                alignSelf: "center",
                marginBottom: 24,
              }}
            />

            {/* Título */}
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <View style={{
                width: 44, height: 44, borderRadius: 12,
                backgroundColor: "rgba(0,3,169,0.3)",
                alignItems: "center", justifyContent: "center",
              }}>
                <Text style={{ fontSize: 20 }}>💳</Text>
              </View>
              <View>
                <Text style={{ color: "#E2E8F0", fontSize: 18, fontWeight: "700" }}>
                  Novo Cartão
                </Text>
                <Text style={{ color: "#475569", fontSize: 13, marginTop: 2 }}>
                  Adicione um cartão à conta
                </Text>
              </View>
            </View>

            {/* Preview do cartão */}
            <View style={{
              backgroundColor: "#0003A9",
              borderRadius: 16,
              padding: 20,
              marginBottom: 24,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.08)",
              minHeight: 140,
              overflow: "hidden",
            }}>
              <View style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: 80, backgroundColor: "rgba(255,255,255,0.04)" }} />
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                <View style={{ width: 32, height: 24, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 4 }} />
                <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: "700" }}>{bandeira}</Text>
              </View>
              <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, letterSpacing: 2, marginBottom: 14 }}>
                {numeroFormatado}
              </Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                  <Text style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, textTransform: "uppercase", marginBottom: 2 }}>Titular</Text>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600" }}>
                    {nome || "SEU NOME"}
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, textTransform: "uppercase", marginBottom: 2 }}>Validade</Text>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600" }}>
                    {expiry || "MM/AA"}
                  </Text>
                </View>
              </View>
            </View>

            {/* Bandeira */}
            <Text style={labelStyle}>Bandeira</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              {BANDEIRAS.map((b) => (
                <TouchableOpacity
                  key={b}
                  onPress={() => setBandeira(b)}
                  style={{
                    paddingHorizontal: 14, paddingVertical: 9,
                    borderRadius: 10,
                    backgroundColor: bandeira === b ? "rgba(0,3,169,0.3)" : "#131929",
                    borderWidth: 1,
                    borderColor: bandeira === b ? "rgba(99,130,255,0.5)" : "rgba(255,255,255,0.06)",
                  }}
                >
                  <Text style={{
                    color: bandeira === b ? "#99AAFF" : "#94A3B8",
                    fontSize: 13, fontWeight: "600",
                  }}>
                    {b}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Campos */}
            <Text style={labelStyle}>Nome do titular</Text>
            <TextInput
              style={inputStyle}
              placeholder="Como no cartão"
              placeholderTextColor="#334155"
              autoCapitalize="characters"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={labelStyle}>Número do cartão</Text>
            <TextInput
              style={inputStyle}
              placeholder="0000 0000 0000 0000"
              placeholderTextColor="#334155"
              keyboardType="numeric"
              value={numero}
              onChangeText={(t) => setNumero(formatNumero(t))}
            />

            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={labelStyle}>Validade</Text>
                <TextInput
                  style={inputStyle}
                  placeholder="MM/AA"
                  placeholderTextColor="#334155"
                  keyboardType="numeric"
                  value={expiry}
                  onChangeText={(t) => setExpiry(formatExpiry(t))}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={labelStyle}>CVV</Text>
                <TextInput
                  style={inputStyle}
                  placeholder="000"
                  placeholderTextColor="#334155"
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={4}
                  value={cvv}
                  onChangeText={setCvv}
                />
              </View>
            </View>

            {/* Botões */}
            <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
              <TouchableOpacity
                onPress={onClose}
                style={{
                  flex: 1, paddingVertical: 16, borderRadius: 14,
                  backgroundColor: "#131929", borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.07)", alignItems: "center",
                }}
              >
                <Text style={{ color: "#64748B", fontWeight: "600" }}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleConfirm}
                style={{
                  flex: 2, paddingVertical: 16, borderRadius: 14,
                  backgroundColor: "#0003A9", alignItems: "center",
                  borderWidth: 1, borderColor: "rgba(99,130,255,0.3)",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>
                  Adicionar cartão
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
