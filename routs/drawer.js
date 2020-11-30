import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HeaderStack from "./headerStack";
import AboutStack from "./aboutStack";
import ContentsStack from "./contentsStack";
import LogInNavigator from "./log_in";
import Maps from "./maps";

const RootDrawerNavigator = createDrawerNavigator({
  Header: {
    screen: HeaderStack,
  },
  Contents: {
    screen: ContentsStack,
  },

  About: {
    screen: AboutStack,
  },
  Log_In: {
    screen: LogInNavigator,
  },
});

export default createAppContainer(RootDrawerNavigator);
