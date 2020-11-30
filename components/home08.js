import React, { useState } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { globalstyles } from "../styles/global";
function Home08() {
  const [people] = useState([
    {
      name:
        ".1 تنظيم العلاقة مع الجهات الوطنية في الداخل والجامعات الأخرى الصديقة في الوطن العربي .",
      key: "1",
    },
    {
      name:
        ".2 تنسيق العلاقات والنشاطات الثقافية والعامة مع الجامعات الأخرى، وتنظيم المعارض والحفات التي تساعد على تفاعل الجامعة مع المجتمع، وتعزّز دورهاالطليعي فيه.",
      key: "2",
    },
    {
      name:
        ".3 جمع المعلومات الصادرة عن أجهزة الإعام المختلفة والمتعلقة بالجامعة، وتصنيفها، وتحليلها، وإعام المسؤولين في الجامعة عنها.",
      key: "3",
    },
    {
      name:
        ".4 جمع الإحصائيات والمعلومات اللازمة عن المؤسسات الثقافية والعلمية والتعليمية في العالم وحفظها.",
      key: "4",
    },
    {
      name:
        ".5 الإشراف على إجراء الدراسات العلمية المتعلقة باتجاهات المواطنين، أو اتجاهات الطلبة نحو الجامعة بالتعاون مع الأجهزة الأكاديمية والإدارية المعنية في الجامعة.",
      key: "5",
    },
  ]);
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>Circle of Public Relations</Text>
      </View>
      <ScrollView style={globalstyles.scroll}>
        <Text style={globalstyles.body4}>
          هي الجهة المسؤولة عن الأنشطة المتصلة بعلاقات الجامعة بالجهات الأخرى في
          الداخل والخارج، والمسؤولة عن تنظيم تلك العلاقة بما يتضمن المحافظة على
          سمعة الجامعة ورفعة مكانتها في المجتمع. والمسؤولة عن تنسيق العلاقات
          الجامعية مع الجامعات الفلسطينية والعربية.
        </Text>
        <Text style={globalstyles.body4}>و تؤدي الدائرة المهام الآتية:</Text>
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <Text style={globalstyles.body2}>{item.name}</Text>
          )}
        />
      </ScrollView>
    </View>
  );
}
export default Home08;
