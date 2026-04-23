import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 10,
  },

  backText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  header: {
    color: "#0003A9",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  chartContainer: {
    alignItems: "center",
  },

  amount: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },

  infoContainer: {
    marginTop: 10,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },

  label: {
    color: "#fff",
    flex: 1,
  },

  value: {
    color: "#9CA3AF",
  },

  inputContainer: {
    marginTop: 20,
  },

  input: {
    backgroundColor: "#1f2937",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default styles;