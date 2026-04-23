import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

type Styles = {
  container: ViewStyle;
  header: ViewStyle;
  logo: ImageStyle;

  balanceContainer: ViewStyle;
  balanceLabel: TextStyle;
  balanceValue: TextStyle;
  balanceCurrency: TextStyle;
  balanceRow: ViewStyle;
  balanceEyeButton: ViewStyle;

  actions: ViewStyle;

  card: ViewStyle;
  cardGradientOverlay: ViewStyle;
  cardHeader: ViewStyle;
  cardBadge: ViewStyle;
  cardBadgeText: TextStyle;
  cardChip: ViewStyle;
  cardChipDot: ViewStyle;
  cardName: TextStyle;
  cardNumber: TextStyle;
  cardFooter: ViewStyle;
  cardExpiry: TextStyle;
  cardExpiryLabel: TextStyle;
  cardPaginationRow: ViewStyle;
  cardDot: ViewStyle;
  cardDotActive: ViewStyle;

  sectionTitle: TextStyle;
  sectionHeader: ViewStyle;
  sectionLink: TextStyle;

  list: ViewStyle;

  transaction: ViewStyle;
  transactionIcon: ViewStyle;
  transactionIconText: TextStyle;
  transactionInfo: ViewStyle;
  transactionText: TextStyle;
  transactionSubText: TextStyle;
  transactionRight: ViewStyle;
  transactionValue: TextStyle;
  transactionValueNegative: TextStyle;
  transactionDate: TextStyle;

  divider: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#0A0F1E",
    paddingHorizontal: 22,
    paddingTop: 52,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  logo: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },

  balanceContainer: {
    marginBottom: 24,
  },

  balanceLabel: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  balanceCurrency: {
    color: "#10B981",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 4,
  },

  balanceValue: {
    color: "#E2E8F0",
    fontSize: 38,
    fontWeight: "700",
    letterSpacing: -1,
  },

  balanceEyeButton: {
    marginLeft: "auto",
    padding: 6,
  },

  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 22,
    gap: 10,
  },

  card: {
    backgroundColor: "#0003A9",
    padding: 22,
    borderRadius: 20,
    marginBottom: 24,
    minHeight: 180,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  cardGradientOverlay: {
    position: "absolute",
    top: -60,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.04)",
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  cardBadge: {
    backgroundColor: "rgba(16, 185, 129, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.3)",
  },

  cardBadgeText: {
    color: "#10B981",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  cardChip: {
    width: 36,
    height: 28,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  cardChipDot: {},

  cardName: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.3,
    marginBottom: 8,
  },

  cardNumber: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 15,
    letterSpacing: 3,
    fontWeight: "400",
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
  },

  cardExpiryLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 10,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 2,
  },

  cardExpiry: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    fontWeight: "500",
  },

  cardPaginationRow: {
    flexDirection: "row",
    gap: 5,
    alignSelf: "flex-end",
  },

  cardDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  cardDotActive: {
    width: 18,
    backgroundColor: "#10B981",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#E2E8F0",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.1,
  },

  sectionLink: {
    color: "#10B981",
    fontSize: 13,
    fontWeight: "500",
  },

  list: {
    paddingBottom: 32,
    gap: 10,
  },

  transaction: {
    backgroundColor: "#131929",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },

  transactionIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
  },

  transactionIconText: {
    fontSize: 18,
  },

  transactionInfo: {
    flex: 1,
  },

  transactionText: {
    color: "#E2E8F0",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 3,
  },

  transactionSubText: {
    color: "#475569",
    fontSize: 12,
    fontWeight: "400",
  },

  transactionRight: {
    alignItems: "flex-end",
    gap: 3,
  },

  transactionValue: {
    color: "#10B981",
    fontWeight: "700",
    fontSize: 15,
  },

  transactionValueNegative: {
    color: "#F87171",
    fontWeight: "700",
    fontSize: 15,
  },

  transactionDate: {
    color: "#334155",
    fontSize: 11,
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
    marginVertical: 6,
  },
});

export default styles;