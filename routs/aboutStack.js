import { createStackNavigator } from "react-navigation-stack";

import About from "../components/about";
import Header1 from "../shared/header1";
import React from "react";
//object
const components = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header1 navigation={navigation} />,
      };
    },
  },
};
const AboutStack = createStackNavigator(components, {
  defaultNavigationOptions: {
    title: "",
    headerTintColor: "#66cdaa",
    headerStyle: { backgroundColor: "#fff", height: 60 },
  },
});

export default AboutStack;
