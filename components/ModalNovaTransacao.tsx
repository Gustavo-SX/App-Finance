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
  onConfirm: (transacao: {
    title: string;
    category: string;
    valor: number;
    icon: string;
    tipo: "entrada" | "saida";
    date: string;
  }) => void;
};

const CATEGORIAS = [
  { label: "Alimentação", icon: "🍔" },
  { label: "Transporte", icon: "🚗" },
  { label: "Saúde", icon: "💊" },
  { label: "Streaming", icon: "📺" },
  { label: "Renda", icon: "💼" },
  { label: "Compras", icon: "🛍️" },
  { label: "Educação", icon: "📚" },
  { label: "Outros", icon: "📌" },
];

export default function ModalNovaTransacao({ visible, onClose, onConfirm }: Props) {
  const [tipo, setTipo] = useState<"entrada" | "saida">("saida");
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(CATEGORIAS[0]);

  const handleConfirm = () => {
    const num = parseFloat(valor.replace(",", "."));
    if (!titulo.trim()) {
      Alert.alert("Campo obrigatório", "Informe um título para a transação.");
      return;
    }
    if (!num || num <= 0) {
      Alert.alert("Valor inválido", "Informe um valor maior que zero.");
      return;
    }

    const agora = new Date();
    const hora = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    onConfirm({
      title: titulo.trim(),
      category: categoriaSelecionada.label,
      valor: tipo === "saida" ? -num : num,
      icon: categoriaSelecionada.icon,
      tipo,
      date: `Hoje, ${hora}`,
    });

    setTitulo(""); setValor(""); setCategoriaSelecionada(CATEGORIAS[0]); setTipo("saida");
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

  const isEntrada = tipo === "entrada";

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
            maxHeight: "92%",
          }}
        >
          <ScrollView
            contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Handle */}
            <View style={{
              width: 40, height: 4,
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: 2, alignSelf: "center", marginBottom: 24,
            }} />

            {/* Título */}
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <View style={{
                width: 44, height: 44, borderRadius: 12,
                backgroundColor: "rgba(99,130,255,0.12)",
                alignItems: "center", justifyContent: "center",
              }}>
                <Text style={{ fontSize: 20 }}>🔄</Text>
              </View>
              <View>
                <Text style={{ color: "#E2E8F0", fontSize: 18, fontWeight: "700" }}>
                  Nova Transação
                </Text>
                <Text style={{ color: "#475569", fontSize: 13, marginTop: 2 }}>
                  Registre uma movimentação
                </Text>
              </View>
            </View>

            {/* Toggle entrada / saída */}
            <View style={{
              flexDirection: "row",
              backgroundColor: "#131929",
              borderRadius: 12,
              padding: 4,
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.06)",
            }}>
              {(["saida", "entrada"] as const).map((t) => (
                <TouchableOpacity
                  key={t}
                  onPress={() => setTipo(t)}
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    borderRadius: 9,
                    alignItems: "center",
                    backgroundColor: tipo === t
                      ? t === "entrada" ? "rgba(16,185,129,0.15)" : "rgba(248,113,113,0.15)"
                      : "transparent",
                    borderWidth: tipo === t ? 1 : 0,
                    borderColor: tipo === t
                      ? t === "entrada" ? "rgba(16,185,129,0.3)" : "rgba(248,113,113,0.3)"
                      : "transparent",
                  }}
                >
                  <Text style={{
                    fontWeight: "700",
                    fontSize: 14,
                    color: tipo === t
                      ? t === "entrada" ? "#10B981" : "#F87171"
                      : "#475569",
                  }}>
                    {t === "entrada" ? "⬆ Entrada" : "⬇ Saída"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Campos */}
            <Text style={labelStyle}>Título</Text>
            <TextInput
              style={inputStyle}
              placeholder="Ex: Supermercado, Salário..."
              placeholderTextColor="#334155"
              value={titulo}
              onChangeText={setTitulo}
            />

            <Text style={labelStyle}>Valor</Text>
            <TextInput
              style={[inputStyle, {
                borderColor: isEntrada ? "rgba(16,185,129,0.25)" : "rgba(248,113,113,0.25)",
              }]}
              placeholder="0,00"
              placeholderTextColor="#334155"
              keyboardType="numeric"
              value={valor}
              onChangeText={setValor}
            />

            {/* Categorias */}
            <Text style={labelStyle}>Categoria</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {CATEGORIAS.map((cat) => {
                const sel = categoriaSelecionada.label === cat.label;
                return (
                  <TouchableOpacity
                    key={cat.label}
                    onPress={() => setCategoriaSelecionada(cat)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      borderRadius: 10,
                      backgroundColor: sel ? "rgba(99,130,255,0.15)" : "#131929",
                      borderWidth: 1,
                      borderColor: sel ? "rgba(99,130,255,0.4)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <Text style={{ fontSize: 14 }}>{cat.icon}</Text>
                    <Text style={{
                      color: sel ? "#99AAFF" : "#94A3B8",
                      fontSize: 12, fontWeight: "600",
                    }}>
                      {cat.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Preview */}
            <View style={{
              backgroundColor: "#131929",
              borderRadius: 14,
              padding: 14,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.05)",
            }}>
              <View style={{
                width: 42, height: 42, borderRadius: 12,
                backgroundColor: "#1E293B",
                alignItems: "center", justifyContent: "center",
              }}>
                <Text style={{ fontSize: 18 }}>{categoriaSelecionada.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#E2E8F0", fontSize: 15, fontWeight: "600" }}>
                  {titulo || "Título da transação"}
                </Text>
                <Text style={{ color: "#475569", fontSize: 12, marginTop: 2 }}>
                  {categoriaSelecionada.label}
                </Text>
              </View>
              <Text style={{
                fontWeight: "700", fontSize: 15,
                color: isEntrada ? "#10B981" : "#F87171",
              }}>
                {isEntrada ? "+" : "-"}R$ {valor || "0,00"}
              </Text>
            </View>

            {/* Botões */}
            <View style={{ flexDirection: "row", gap: 10 }}>
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
                  backgroundColor: isEntrada ? "#10B981" : "#F87171",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>
                  Registrar transação
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
