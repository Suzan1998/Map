import { createStackNavigator } from "react-navigation-stack";
import Login from "../components/login";
import signin from "../components/signin";
import Header1 from "../shared/header1";
import React from "react";
//object
const components = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header1 navigation={navigation} />,
      };
    },
  },

  Signin: {
    screen: signin,
  },
};
const Log_In = createStackNavigator(components, {
  defaultNavigationOptions: {
    title: "",
    headerTintColor: "#",
    headerStyle: { backgroundColor: "#fff", height: 60 },
  },
});

export default Log_In;
