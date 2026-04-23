import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

type Style = {
  container: ViewStyle;
  headerGradient: ViewStyle;
  contentCard: ViewStyle;
  avatarContainer: ViewStyle;
  avatar: ImageStyle;
  title: TextStyle;
  userId: TextStyle;
  inputContainer: ViewStyle;
  inputLabel: TextStyle;
  input: TextStyle;
  userName: TextStyle;
  sectionTitle: TextStyle;
  rowBetween: ViewStyle;
};

export const theme = {
  colors: {
    textDark: '#ffffff',
    textGrey: '#fcfbff',
    primary: '#0003A9',
    inputBackground: '#E8F5F1', 
  }
};

export const style = StyleSheet.create<Style>({
  container: { flex: 1, backgroundColor: "#010101" },
  headerGradient: {
    height: 180,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  contentCard: {
    flex: 1,
    backgroundColor: "#000000",
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 60,
    alignItems: 'center', 
  },
  avatarContainer: { 
  alignSelf: 'center',marginTop: -110,  marginBottom: 10, zIndex: 10, 
},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#ffffff", marginTop: 10 },
  userName: { fontSize: 22, fontWeight: "bold", color: "#ffffff", marginTop: 10 },
  userId: { fontSize: 14, color: "#777", marginBottom: 20 },
  sectionTitle: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    fontSize: 18
  },
  inputContainer: { width: '100%', marginBottom: 15 },
  inputLabel: { color: '#fff', marginBottom: 5, fontSize: 14, fontWeight: '600' },
  input: {
    backgroundColor: theme.colors.inputBackground,
    padding: 12,
    borderRadius: 10,
    width: '100%',
    color: '#000'
  },
  rowBetween: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  }
});

