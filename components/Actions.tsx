import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../css/cssHome";
import ModalAdicionar from "./ModalAdicionar";
import ModalRetirar from "./ModalRetirar";
import ModalNovoCartao from "./ModalNovoCartao";
import ModalNovaTransacao from "./ModalNovaTransacao";
import { supabase } from "../services/supabase";


type ModalType = "adicionar" | "retirar" | "cartao" | "transacao" | null;

type Card = {
  nome: string;
  numero: string;
  expiry: string;
  tipo: string;
};

type Transaction = {
  id: string;
  title: string;
  category: string;
  valor: number;
  icon: string;
  date: string;
};

type Props = {
  saldo: number;
  onSaldoChange: (novoSaldo: number) => void;
  onNovoCartao?: (card: Card) => void;
  onNovaTransacao?: (transacao: Transaction) => void;
};

type BotaoProps = {
  title: string;
  icon: string;
  onPress: () => void;
  accentColor?: string;
};

function ActionButton({ title, icon, onPress, accentColor = "#10B981" }: BotaoProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={{
        flex: 1,
        minWidth: "44%",
        backgroundColor: "#131929",
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)",
        gap: 8,
      }}
    >
      <View
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          backgroundColor: `${accentColor}1A`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>{icon}</Text>
      </View>
      <Text
        style={{
          color: "#94A3B8",
          fontSize: 12,
          fontWeight: "600",
          letterSpacing: 0.2,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function Actions({ saldo, onSaldoChange, onNovoCartao, onNovaTransacao }: Props) {
  const [modalAberto, setModalAberto] = useState<ModalType>(null);

  const agora = () =>
    new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

 const handleAdicionar = async (valor: number) => {
  const nova = {
    title: "Depósito",
    category: "Renda",
    valor,
    icon: "💰",
    date: `Hoje, ${agora()}`,
  };

  await supabase.from("transactions").insert([nova]);

  onSaldoChange(saldo + valor);
};

const handleRetirar = async (valor: number) => {
  const nova = {
    title: "Retirada",
    category: "Saque",
    valor: -valor,
    icon: "💸",
    date: `Hoje, ${agora()}`,
  };

  await supabase.from("transactions").insert([nova]);

  onSaldoChange(saldo - valor);
};

  const handleNovaTransacao = async (transacao: any) => {
  await supabase.from("transactions").insert([transacao]);

  const abs = Math.abs(transacao.valor);
  onSaldoChange(transacao.tipo === "entrada" ? saldo + abs : saldo - abs);
};


  return (
    <>
      <View style={styles.actions}>
        <ActionButton title="Adicionar" icon="➕" accentColor="#10B981" onPress={() => setModalAberto("adicionar")} />
        <ActionButton title="Retirar"   icon="💸" accentColor="#F87171" onPress={() => setModalAberto("retirar")} />
        <ActionButton title="Novo Cartão" icon="💳" accentColor="#6382FF" onPress={() => setModalAberto("cartao")} />
        <ActionButton title="Transação" icon="🔄" accentColor="#A78BFA" onPress={() => setModalAberto("transacao")} />
      </View>

      <ModalAdicionar
        visible={modalAberto === "adicionar"}
        onClose={() => setModalAberto(null)}
        onConfirm={handleAdicionar}
      />
      <ModalRetirar
        visible={modalAberto === "retirar"}
        saldoAtual={saldo}
        onClose={() => setModalAberto(null)}
        onConfirm={handleRetirar}
      />
      <ModalNovoCartao
        visible={modalAberto === "cartao"}
        onClose={() => setModalAberto(null)}
        onConfirm={(card) => onNovoCartao?.(card)}
      />
      <ModalNovaTransacao
        visible={modalAberto === "transacao"}
        onClose={() => setModalAberto(null)}
        onConfirm={handleNovaTransacao}
      />
    </>
  );
}
