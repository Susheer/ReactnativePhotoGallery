import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Mid from "./components/mid";
import Body from "./components/body";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Mid />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
