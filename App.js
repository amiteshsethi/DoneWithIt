import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
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
