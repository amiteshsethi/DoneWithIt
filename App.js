import { StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },

  subHeading: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  downloadButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#eee",
  },

  downloadIcon: {
    fontSize: 18,
  },
});
