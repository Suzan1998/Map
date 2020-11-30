import React, { useState } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalstyles } from "../styles/global";
function Home04() {
  const [people] = useState([
    {
      name: "1-النهوض بالتعليم العالي وتطويره وتعزيزه في المجالات جميعها.",
      key: "1",
    },
    {
      name:
        "2-النهوض بالبحث العلمي في الحقول العلمية والإنسانية لتحقيق إضافات علمية إغناءً للمعرفة  البشر ية . ",
      key: "2",
    },
    {
      name:
        "3-تفعيل دور الجامعة التنموي والريادي لخدمة المجتمع، والإسهام في حل مشكلاته.",
      key: "3",
    },
    {
      name:
        "4-تطوير كفاءة الأداء الإداري في الجامعة وتعزيزه لتحسين الخدمات الإدارية، بما يساعد الجامعة على تحقيق رسالتها.",
      key: "4",
    },
  ]);
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>Strategic Plan Objectives</Text>
      </View>

      <Text style={globalstyles.body2}>
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <Text style={globalstyles.body4}>{item.name}</Text>
          )}
        />
      </Text>

      <View style={styles.header}>
        <Image source={require("../assets/6.png")} style={styles.p1} />
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
export default Home04;
