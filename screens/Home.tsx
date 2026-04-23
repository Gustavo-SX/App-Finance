import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "../css/cssHome";
import Header from "../components/Header";
import Balance from "../components/Balance";
import Actions from "../components/Actions";
import CardCarousel from "../components/CardCarousel";
import TransactionList from "../components/TransactionList";
import Routes from '../components/Navbar'

const CARTOES_INICIAIS = [
  { nome: "Gustavo Silva", numero: "**** **** **** 1234", expiry: "08/27", tipo: "Visa" },
  { nome: "Gustavo Silva", numero: "**** **** **** 5678", expiry: "03/26", tipo: "Mastercard" },
];

const TRANSACOES_INICIAIS = [
  { id: "1", title: "iFood",    category: "Alimentação", valor: -50.9,  icon: "🍔", date: "Hoje, 12:34" },
  { id: "2", title: "Uber",     category: "Transporte",  valor: -18.5,  icon: "🚗", date: "Hoje, 09:10" },
  { id: "3", title: "Salário",  category: "Renda",       valor: 3500,   icon: "💼", date: "Ontem" },
  { id: "4", title: "Netflix",  category: "Streaming",   valor: -39.9,  icon: "📺", date: "18 abr" },
];

export default function Home() {
  const [saldo, setSaldo] = useState(1200);
  const [cartoes, setCartoes] = useState(CARTOES_INICIAIS);
  const [transacoes, setTransacoes] = useState(TRANSACOES_INICIAIS);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <Balance saldo={saldo} />

      <CardCarousel cartoes={cartoes} />

      <Actions
        saldo={saldo}
        onSaldoChange={setSaldo}
        onNovoCartao={(card) => setCartoes((prev) => [...prev, card])}
        onNovaTransacao={(t) => setTransacoes((prev) => [t, ...prev])}
      />

      <TransactionList transacoes={transacoes} />

      <View style={{ height: 32 }} />
    
    </ScrollView>
  );
}
