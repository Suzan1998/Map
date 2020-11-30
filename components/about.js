import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { globalstyles } from "../styles/global";
function About() {
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>About Application</Text>
      </View>

      <View style={styles.header}>
        <Image source={require("../assets/2.png")} style={styles.p1} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  p1: {
    width: 200,
    height: 160,
  },
});
export default About;
