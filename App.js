//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootDrawerNavigator from "./routs/drawer";

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}
