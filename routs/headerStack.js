import { createStackNavigator } from "react-navigation-stack";
import Header from "../components/header";
import Header1 from "../shared/header1";
import React from "react";
//object
const components = {
  Header: {
    screen: Header,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header1 navigation={navigation} />,
      };
    },
  },
};

const HeaderStack = createStackNavigator(components, {
  defaultNavigationOptions: {
    title: "",
    headerTintColor: "",
    headerStyle: { backgroundColor: "", height: 60 },
  },
});

export default HeaderStack;
