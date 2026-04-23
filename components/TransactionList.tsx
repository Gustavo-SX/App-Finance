import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../css/cssHome";

type Transaction = {
  id: string;
  title: string;
  category: string;
  valor: number;
  icon: string;
  date: string;
};

type Props = {
  transacoes: Transaction[];
};

function TransactionItem({ item }: { item: Transaction }) {
  const isPositive = item.valor > 0;
  const formatted = `${isPositive ? "+" : ""}R$ ${Math.abs(item.valor)
    .toFixed(2)
    .replace(".", ",")}`;

  return (
    <View style={styles.transaction}>
      <View style={styles.transactionIcon}>
        <Text style={styles.transactionIconText}>{item.icon}</Text>
      </View>

      <View style={styles.transactionInfo}>
        <Text style={styles.transactionText}>{item.title}</Text>
        <Text style={styles.transactionSubText}>{item.category}</Text>
      </View>

      <View style={styles.transactionRight}>
        <Text
          style={
            isPositive
              ? styles.transactionValue
              : styles.transactionValueNegative
          }
        >
          {formatted}
        </Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </View>
  );
}

export default function TransactionList({ transacoes }: Props) {
  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Últimas transações</Text>
        <Text style={styles.sectionLink}>Ver todas</Text>
      </View>

      <FlatList
        data={transacoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        scrollEnabled={false}
        renderItem={({ item }) => <TransactionItem item={item} />}
      />
    </>
  );
}