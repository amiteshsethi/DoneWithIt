import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background} source={require("../assets/rrrrr.webp")}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>DoneWithIt</Text>
        <Text style={styles.logoSubText}>Getting officailly done with old stuff</Text>
      </View>

      <Pressable style={styles.loginButton} onPress={() => console.log("Login pressed")}>
        <Text>Log In</Text>
      </Pressable>

      <Pressable style={styles.registerButton} onPress={() => console.log("Register pressed")}>
        <Text>Register</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  logoSubText: {
    fontSize: 15,
    color: "white",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fd9644",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});
