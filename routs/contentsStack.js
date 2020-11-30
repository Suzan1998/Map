import { createStackNavigator } from "react-navigation-stack";
import Contents from "../components/contents";
import Header1 from "../shared/header1";
import Home from "../components/home";
import Home1 from "../components/home1";
import Home2 from "../components/home2";
import Home11 from "../components/home11";
import Home12 from "../components/home12";
import Home13 from "../components/home13";
import Home14 from "../components/home14";
import Home15 from "../components/home15";
import Home16 from "../components/home16";
import Home18 from "../components/home18";
import Home21 from "../components/home21";
import Home22 from "../components/home22";
import Home23 from "../components/home23";
import Home24 from "../components/home24";
import Home25 from "../components/home25";
import Home26 from "../components/home26";
import Home27 from "../components/home27";
import Home00 from "../components/home00";
import Home01 from "../components/home01";
import Home02 from "../components/home02";
import Home03 from "../components/home03";
import Home04 from "../components/home04";
import Home040 from "../components/home040";
import Home05 from "../components/home05";
import Home06 from "../components/home06";
import Home07 from "../components/home07";
import Home08 from "../components/home08";
import Home09 from "../components/home09";
import Home010 from "../components/home010";
import Home011 from "../components/home011";
import Home012 from "../components/home012";
import React from "react";

//object
const components = {
  Contents: {
    screen: Contents,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header1 navigation={navigation} />,
      };
    },
  },
  Home: {
    screen: Home,
  },
  Home1: {
    screen: Home1,
  },
  Home2: {
    screen: Home2,
  },
  Home11: {
    screen: Home11,
  },
  Home12: {
    screen: Home12,
  },
  Home13: {
    screen: Home13,
  },
  Home14: {
    screen: Home14,
  },
  Home15: {
    screen: Home15,
  },
  Home16: {
    screen: Home16,
  },
  Home18: {
    screen: Home18,
  },
  Home21: {
    screen: Home21,
  },
  Home22: {
    screen: Home22,
  },
  Home23: {
    screen: Home23,
  },
  Home24: {
    screen: Home24,
  },
  Home25: {
    screen: Home25,
  },
  Home26: {
    screen: Home26,
  },
  Home27: {
    screen: Home27,
  },
  Home00: {
    screen: Home00,
  },
  Home01: {
    screen: Home01,
  },
  Home02: {
    screen: Home02,
  },
  Home03: {
    screen: Home03,
  },
  Home04: {
    screen: Home04,
  },
  Home040: {
    screen: Home040,
  },
  Home05: {
    screen: Home05,
  },
  Home06: {
    screen: Home06,
  },
  Home07: {
    screen: Home07,
  },
  Home08: {
    screen: Home08,
  },
  Home09: {
    screen: Home09,
  },
  Home010: {
    screen: Home010,
  },
  Home011: {
    screen: Home011,
  },
  Home012: {
    screen: Home012,
  },
};
const ContentsStack = createStackNavigator(components, {
  defaultNavigationOptions: {
    title: "",
    headerTintColor: "#66cdaa",
    headerStyle: { backgroundColor: "#fff", height: 60 },
  },
});

export default ContentsStack;
