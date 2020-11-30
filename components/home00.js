import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalstyles } from "../styles/global";
function Home00() {
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>Introduction</Text>
      </View>
      <ScrollView style={globalstyles.scroll}>
        <Text style={globalstyles.body2}>
          يسرّ إدارة جامعة النجاح الوطنية أن تقدّم للطلبة الأعزاء هذا الدليل،
          الذي يتضمن معلومات وافية عن كليات الجامعة وبرامجها العلمية، إضافة إلى
          تعليمات منح درجة البكالوريوس، ويعدّ الإلمام بتعليمات هذا الدليل ضرورة
          للطالب لكي يسير في دراسته وفق خطوات مستنيرة، وتزويد الطالب بالخطط
          الدراسية المقررة يساعده على اختيار البرامج الدراسية التي تقدمها كليات
          الجامعة المتنوعة ويبين له طريقة اختيار التخصص العلمي الذي يرغب فيه، و
          يؤهله لنيل الشهادة الجامعية التي تمنحها الجامعة في التخصص الذي اختاره.
          سائلين الله العلي القدير العون والتوفيق.
        </Text>
      </ScrollView>
      <View style={styles.header}>
        <Image source={require("../assets/2.png")} style={styles.p1} />
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
    borderRadius: 10,
    width: 350,
    height: 350,
    alignSelf: "center",
  },
});
export default Home00;
