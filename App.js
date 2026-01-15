import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight } from "react-native";
import { Button } from "react-native-web";
import { useState } from "react";

export default function App() {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/200/300?random=1");
  const [isButtonPressed, setIsButtonPressed] = useState(false);


  const handleGenerateImage = () => {
    setIsButtonPressed(true);
    setImageUrl(`https://picsum.photos/200/300?random=${Math.random()}`);
  };

  return (
    <View style={styles.container}>
      <Text>Hello to the World of React Native!</Text>

      {isButtonPressed && (
      <TouchableOpacity 
        onPress={() => setIsButtonPressed(false)}
      >
        <Image source={{ uri: imageUrl }} style={{ width: 300, height: 300 }} />
      </TouchableOpacity>
      )}

      <Button color="orange" title="Generate Image" onPress={handleGenerateImage}/>
{/* 
      <TouchableHighlight 
        onPress={() => console.log("Image tapped!")}
      >
        <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 300, height: 300 }} />
      </TouchableHighlight> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
