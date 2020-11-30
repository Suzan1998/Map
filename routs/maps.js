import { createStackNavigator } from "react-navigation-stack";
import Home00 from "../components/home00";
import Header1 from "../shared/header1";
import React from "react";
//object
const components = {
  Home00: {
    screen: Home00, //// لااااااازم أعدلها
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header1 navigation={navigation} />,
      };
    },
  },
};
const Maps = createStackNavigator(components, {
  defaultNavigationOptions: {
    title: "",
    headerTintColor: "#66cdaa",
    headerStyle: { backgroundColor: "#fff", height: 60 },
  },
});

export default Maps;
