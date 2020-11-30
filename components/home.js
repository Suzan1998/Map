import React, { useState } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalstyles } from "../styles/global";
function Home({ navigation }) {
  const pressHandler1 = () => {
    navigation.navigate("Home1");
  };
  const pressHandler2 = () => {
    navigation.navigate("Home2");
  };

  return (
    <View style={globalstyles.container}>
      <ScrollView>
        <View style={globalstyles.header}>
          <Text style={globalstyles.body}>
            Welcome to An-Najah National University!
          </Text>
        </View>

        <View style={styles.header}>
          <Image source={require("../assets/11.jpg")} style={styles.p1} />
        </View>
        <View style={styles.button1}>
          <Button title="Academy" color="#4b0082" onPress={pressHandler1} />
        </View>
        <View style={styles.header1}>
          <Image source={require("../assets/21.jpg")} style={styles.p2} />
        </View>
        <View style={globalstyles.button22}>
          <Button title="Old" color="#4b0082" onPress={pressHandler2} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "skyblue",
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 10,
  },

  button1: {
    padding: 10,
    paddingTop: 10,
  },
  button22: {
    padding: 10,
    paddingTop: 10,
  },
  header: {
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  header1: {
    padding: 20,
    marginTop: 1,
    alignItems: "center",
  },
  p1: {
    width: 200,
    height: 160,
    marginTop: 1,
  },
  p2: {
    width: 200,
    height: 160,
    marginTop: 10,
  },
});

export default Home;
