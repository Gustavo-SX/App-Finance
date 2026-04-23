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
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (valor: number) => void;
};

const VALORES_RAPIDOS = [50, 100, 200, 500];

export default function ModalAdicionar({ visible, onClose, onConfirm }: Props) {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleConfirm = () => {
    const num = parseFloat(valor.replace(",", "."));
    if (!num || num <= 0) {
      Alert.alert("Valor inválido", "Informe um valor maior que zero.");
      return;
    }
    onConfirm(num);
    setValor("");
    setDescricao("");
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
            padding: 24,
            paddingBottom: 36,
            borderTopWidth: 1,
            borderColor: "rgba(255,255,255,0.07)",
          }}
        >
          {/* Handle */}
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 2,
              alignSelf: "center",
              marginBottom: 24,
            }}
          />

          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: "rgba(16,185,129,0.12)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>➕</Text>
            </View>
            <View>
              <Text
                style={{ color: "#E2E8F0", fontSize: 18, fontWeight: "700" }}
              >
                Adicionar Saldo
              </Text>
              <Text style={{ color: "#475569", fontSize: 13, marginTop: 2 }}>
                Depósito na conta
              </Text>
            </View>
          </View>

          {/* Valores rápidos */}
          <Text
            style={{
              color: "#475569",
              fontSize: 12,
              fontWeight: "600",
              letterSpacing: 0.6,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Valores rápidos
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              marginBottom: 16,
            }}
          >
            {VALORES_RAPIDOS.map((v) => (
              <TouchableOpacity
                key={v}
                onPress={() => setValor(v.toString())}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor:
                    valor === v.toString()
                      ? "rgba(16,185,129,0.15)"
                      : "#131929",
                  borderWidth: 1,
                  borderColor:
                    valor === v.toString()
                      ? "rgba(16,185,129,0.4)"
                      : "rgba(255,255,255,0.06)",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: valor === v.toString() ? "#10B981" : "#94A3B8",
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                >
                  R${v}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Inputs */}
          <Text
            style={{
              color: "#475569",
              fontSize: 12,
              fontWeight: "600",
              letterSpacing: 0.6,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Ou informe o valor
          </Text>
          <TextInput
            style={inputStyle}
            placeholder="0,00"
            placeholderTextColor="#334155"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
          <TextInput
            style={inputStyle}
            placeholder="Descrição (opcional)"
            placeholderTextColor="#334155"
            value={descricao}
            onChangeText={setDescricao}
          />

          {/* Botões */}
          <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
            <TouchableOpacity
              onPress={onClose}
              style={{
                flex: 1,
                paddingVertical: 16,
                borderRadius: 14,
                backgroundColor: "#131929",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.07)",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#64748B", fontWeight: "600" }}>
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleConfirm}
              style={{
                flex: 2,
                paddingVertical: 16,
                borderRadius: 14,
                backgroundColor: "#10B981",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}
              >
                Confirmar depósito
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
