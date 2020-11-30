import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image,
  Linking,
} from "react-native";
const URL = "http://192.168.1.113:3000"; //your map url
function Header({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Main");
    //navigation.push('Home');
    //navigation.goback(); هاي بالصفحة الثانية لارجع لصفحة ال home
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#007f88" />
      <Text style={styles.head}>
        Handle Book of An Najah National University
      </Text>
      <Image source={require("../assets/logo2.png")} style={styles.p1} />
      <View style={styles.button}>
        <Button
          title="  Lets Start  "
          color="#005d66"
          width="300px"
          onPress={() => Linking.openURL(URL)}
        ></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  head: {
    backgroundColor: "#005d66",
    padding: 30,
    fontSize: 15,
    color: "white",
    marginTop: -200,
    marginBottom: 30,
    width: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  p1: {
    width: 295,
    height: 295,
    marginTop: 20,
  },
  button: {
    width: 295,
    marginTop: 70,
  },
});

export default Header;
