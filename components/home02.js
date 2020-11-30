import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { globalstyles } from "../styles/global";
import { Card, CardBody, Icon } from "react-native-elements";
function Home02() {
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>Vision of the University</Text>
      </View>
      <ScrollView style={globalstyles.scroll}>
        <Text style={globalstyles.body2}>
          تسعى جامعة النجاح الوطنية لتكون محل احترام عالمي على صعيد جودة التعليم
          العالي، ومركزاً ريادياً عالمياً في البحث العلمي، وقاعدة فاعلة لخدمة
          المجتمع وقيادته.
        </Text>
      </ScrollView>
      <View style={styles.header}>
        <Image source={require("../assets/4.png")} style={styles.p1} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 100,
    marginTop: 0,
    alignItems: "center",
  },
  p1: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default Home02;
