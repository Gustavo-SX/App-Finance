import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../css/cssHome";

type Card = {
  nome: string;
  numero: string;
  expiry: string;
  tipo: string;
};

type Props = {
  cartoes: Card[];
};

export default function CardCarousel({ cartoes }: Props) {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cartoes.length);
  };

  const card = cartoes[index];

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={nextCard}
        activeOpacity={0.9}
      >
        
        <View style={styles.cardGradientOverlay} />

        <View
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 220,
            height: 220,
            borderRadius: 110,
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        />

        {/* topo */}
        <View style={styles.cardHeader}>
          <View style={styles.cardBadge}>
            <Text style={styles.cardBadgeText}>● Ativo</Text>
          </View>

          <Text
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 15,
              fontWeight: "700",
              letterSpacing: 1,
            }}
          >
            {card.tipo}
          </Text>
        </View>
        
        <View style={styles.cardChip} />

        
        <View style={{ marginTop: 14 }}>
          <Text style={styles.cardName}>{card.nome}</Text>
          <Text style={styles.cardNumber}>{card.numero}</Text>
        </View>

      
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardExpiryLabel}>Validade</Text>
            <Text style={styles.cardExpiry}>{card.expiry}</Text>
          </View>

          
          <View style={styles.cardPaginationRow}>
            {cartoes.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.cardDot,
                  i === index && styles.cardDotActive,
                ]}
              />
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}