import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { globalstyles } from "../styles/global";
function Home03() {
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>Message of the University</Text>
      </View>
      <ScrollView style={globalstyles.scroll}>
        <Text style={globalstyles.body2}>
          جامعة النجاح الوطنية هي جامعة عامة، تهدف إلى إعداد الكوادر البشرية
          المهنية المؤهلة للقيادة وتطويرها في ميادين الحياة جميعها، وإكساب طلبة
          الجامعة المعرفة العلمية المتميزة، والمهارات الفردية التي تعزز قدرتهم
          على المنافسة في أسواق العمل المحلية والعربية والدولية، ليكون خريج
          الجامعة عنصراً خلاقاً وفاعاً. وتهدف الجامعة أيضا إلى الإسهام الفاعل في
          تقدم البحث العلمي على المستوى العالمي، وتلبية حاجات المجتمع في مجالات
          التنمية الاقتصادية والاجتماعية والإنسانية والتقنية، والإسهام في إغناء
          المعرفة البشرية، والحفاظ على الإرث الحضاري والديني للشعب ا لفلسطيني.
        </Text>
      </ScrollView>
      <View style={styles.header}>
        <Image source={require("../assets/5.png")} style={styles.p1} />
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
export default Home03;
