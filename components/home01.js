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
function Home01() {
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>History of the University</Text>
      </View>
      <ScrollView style={globalstyles.scroll}>
        <Text style={globalstyles.body2}>
          بدأت النجاح مسيرتها العلمية عام 1918 مدرسة ابتدائية، تحمل اسم مدرسة
          النجاح النابلسية، ثم تطورت عام 1941 إلى كلية النجاح الوطنية، وبدأت
          بمنح درجة الدبلوم في بعض التخصصات التجارية والأكاديمية، وفي عام 1965
          بدأت بمنح الدرجة الجامعية المتوسطة في تخصصات أكاديمية تهدف إلى إعداد
          المعلمين وتأهيلهم تربوياً، وفي عام 1977 تم تحويل الكلية إلى جامعة
          تلبية لحاجة المجتمع الفلسطيني إلى مؤسسات للتعليم العالي، وأصبحت هذه
          الجامعة تحمل اسم جامعة النجاح الوطنية.
        </Text>
      </ScrollView>
      <View style={styles.header}>
        <Image source={require("../assets/3.png")} style={styles.p1} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  p1: {
    width: 200,
    height: 160,
  },
});
export default Home01;
