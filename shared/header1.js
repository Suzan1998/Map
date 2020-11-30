import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header1({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header1}>
      <MaterialIcons
        name="menu"
        size={33}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 6,
  },
});

export default Header1;
