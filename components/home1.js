import React, { useState } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalstyles } from "../styles/global";

function Home1({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home11");
  };
  const pressHandler1 = () => {
    navigation.navigate("Home12");
  };
  const pressHandler2 = () => {
    navigation.navigate("Home13");
  };
  const pressHandler3 = () => {
    navigation.navigate("Home14");
  };
  const pressHandler4 = () => {
    navigation.navigate("Home15");
  };
  const pressHandler5 = () => {
    navigation.navigate("Home16");
  };
  const pressHandler7 = () => {
    navigation.navigate("Home18");
  };
  return (
    <View style={globalstyles.container}>
      <ScrollView>
        <View style={globalstyles.button2}>
          <Button
            title="Student registration"
            color="#4b0082"
            onPress={pressHandler}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="College of Engineering and Information Technology"
            color="#4b0082"
            onPress={pressHandler1}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="College of Science"
            color="#4b0082"
            onPress={pressHandler2}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="College of Medicine and Health Sciences"
            color="#4b0082"
            onPress={pressHandler3}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="School of Law"
            color="#4b0082"
            onPress={pressHandler4}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Faculty of Physical Education"
            color="#4b0082"
            onPress={pressHandler5}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="College of Fine Arts"
            color="#4b0082"
            onPress={pressHandler7}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home1;
