import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { globalstyles } from "../styles/global";
function Home2({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home21");
  };
  const pressHandler1 = () => {
    navigation.navigate("Home22");
  };
  const pressHandler2 = () => {
    navigation.navigate("Home23");
  };
  const pressHandler3 = () => {
    navigation.navigate("Home24");
  };
  const pressHandler4 = () => {
    navigation.navigate("Home25");
  };
  const pressHandler5 = () => {
    navigation.navigate("Home26");
  };
  const pressHandler6 = () => {
    navigation.navigate("Home27");
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
            title="College of Sharia"
            color="#4b0082"
            onPress={pressHandler1}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Faculty of Humanities"
            color="#4b0082"
            onPress={pressHandler2}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="college of Literature"
            color="#4b0082"
            onPress={pressHandler3}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="College of Economics and Social Sciences"
            color="#4b0082"
            onPress={pressHandler4}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="College of Agriculture and Veterinary Medicine"
            color="#4b0082"
            onPress={pressHandler5}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Faculty of Educational Sciences and Teacher Preparation"
            color="#4b0082"
            onPress={pressHandler6}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home2;
