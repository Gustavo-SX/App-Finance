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
  saldoAtual: number;
  onClose: () => void;
  onConfirm: (valor: number) => void;
};

const PERCENTUAIS = [
  { label: "25%", fator: 0.25 },
  { label: "50%", fator: 0.5 },
  { label: "75%", fator: 0.75 },
  { label: "100%", fator: 1 },
];

export default function ModalRetirar({
  visible,
  saldoAtual,
  onClose,
  onConfirm,
}: Props) {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [percentSelecionado, setPercentSelecionado] = useState<number | null>(
    null
  );

  const handlePercent = (fator: number) => {
    const v = (saldoAtual * fator).toFixed(2).replace(".", ",");
    setValor(v);
    setPercentSelecionado(fator);
  };

  const handleConfirm = () => {
    const num = parseFloat(valor.replace(",", "."));
    if (!num || num <= 0) {
      Alert.alert("Valor inválido", "Informe um valor maior que zero.");
      return;
    }
    if (num > saldoAtual) {
      Alert.alert("Saldo insuficiente", "O valor excede o saldo disponível.");
      return;
    }
    onConfirm(num);
    setValor("");
    setDescricao("");
    setPercentSelecionado(null);
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

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: "rgba(248,113,113,0.12)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>💸</Text>
            </View>
            <View>
              <Text
                style={{ color: "#E2E8F0", fontSize: 18, fontWeight: "700" }}
              >
                Retirar Saldo
              </Text>
              <Text style={{ color: "#475569", fontSize: 13, marginTop: 2 }}>
                Saldo disponível: R${" "}
                <Text style={{ color: "#10B981", fontWeight: "600" }}>
                  {saldoAtual.toFixed(2).replace(".", ",")}
                </Text>
              </Text>
            </View>
          </View>

          {/* Percentuais */}
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
            Retirar porcentagem
          </Text>
          <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
            {PERCENTUAIS.map(({ label, fator }) => (
              <TouchableOpacity
                key={fator}
                onPress={() => handlePercent(fator)}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor:
                    percentSelecionado === fator
                      ? "rgba(248,113,113,0.15)"
                      : "#131929",
                  borderWidth: 1,
                  borderColor:
                    percentSelecionado === fator
                      ? "rgba(248,113,113,0.4)"
                      : "rgba(255,255,255,0.06)",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color:
                      percentSelecionado === fator ? "#F87171" : "#94A3B8",
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

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
            onChangeText={(t) => {
              setValor(t);
              setPercentSelecionado(null);
            }}
          />
          <TextInput
            style={inputStyle}
            placeholder="Descrição (opcional)"
            placeholderTextColor="#334155"
            value={descricao}
            onChangeText={setDescricao}
          />

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
                backgroundColor: "#F87171",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}
              >
                Confirmar retirada
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
