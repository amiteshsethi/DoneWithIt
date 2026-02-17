import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Login</AppText>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" color={colors.primary} onPress={() => console.log("Logging in...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default LoginScreen;
