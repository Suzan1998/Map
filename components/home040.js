import React, { useState } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { globalstyles } from "../styles/global";
function Home040() {
  const [people] = useState([
    { name: "المهندس صبيح طاهر المصري", key: "1" },
    { name: "•دولة أ.د. رامي الحمد الله، نائب رئيس مجلس الأمناء", key: "2" },
    { name: "•أ.د. رفعت الصفدي، عضواً", key: "3" },
    { name: "•د. رند سلمان، عضواً", key: "4" },
    { name: "•د. وليد خوري، عضواً", key: "5" },
    { name: "•المستشار عماد سليم سعد، عضواً", key: "6" },
    { name: "•د. عمار الدويك، عضواً    ", key: "7" },
    { name: "•أ. رولا الشنار، عضواً  ", key: "8" },
    { name: "•د. وليد نمور، عضواً  ", key: "9" },
    { name: "•أ. عمار العكر، عضواً  ", key: "10" },
    { name: "•د. هاني النابلسي، عضواً  ", key: "11" },
    { name: "•م. عارف الحسيني، عضواً  ", key: "12" },
    { name: "•م. مهدي الصيفي، عضواً  ", key: "13" },
    { name: "•م. بشار المصري، عضواً  ", key: "14" },
    { name: "•أ. فاروق طوقان، عضواً  ", key: "15" },
  ]);
  const [people1] = useState([
    { name: "1. رئيس الجامعة، رئيساً للمجلس.", key: "1" },
    { name: "2. نواب الرئيس والمساعدين.", key: "2" },
    { name: "3. العمداء.", key: "3" },
  ]);
  const [people2] = useState([
    { name: "1. عميد الكلية، رئيساً للمجلس.", key: "1" },
    { name: "2. رئيس كل قسم أكاديمي من أقسام الكلية.", key: "2" },
    {
      name:
        "3.ممثلين برتبة أستاذ مساعد على الأقل من أعضاء الهيئة التدريسية  في الكلية ينتخبهم أعضاء الهيئة التدريسية في تلك الكلية سنوياً .",
      key: "3",
    },
  ]);
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>Councils of An-Najah University</Text>
      </View>
      <ScrollView>
        <Text style={globalstyles.body3}>
          نبذة عن المجالس:
          <Text style={globalstyles.body2}>
            تتحدد سياسات الجامعة من خال مجموعة من المجالس التي تعمل وفق أنظمة
            الجامعة، وتتكون هذه المجالس من:
          </Text>
        </Text>
        <Text style={globalstyles.body3}>
          1- مجلس الأمناء:
          <Text style={globalstyles.body2}>
            يعدّ هذا المجلس السلطة التشريعية العليا في الجامعة، فهو يعمل على
            إقرار الأنظمة المالية والإدارية للجامعة، ويشرف على توفير الموارد
            المالية للجامعة.ويتشكل مجلس الأمناء الحالي من:
          </Text>
          <Text style={globalstyles.body4}>رئيس مجلس الأمناء</Text>
          <FlatList
            data={people}
            renderItem={({ item }) => (
              <Text style={globalstyles.body4}>{item.name}</Text>
            )}
          />
        </Text>
        <Text style={globalstyles.body3}>
          2- مجلس العمداء :
          <Text style={globalstyles.body2}>
            يقوم هذا المجلس بتحديد سياسة الجامعة الأكاديمية، ومراجعتها، واتخاذ
            القرارات والتوصيات المناسبة بموجب أنظمة الجامعة، التي من أهمها إقرار
            الخطط والبرامج الدراسية، وتحديد احتياجات كليات الجامعة الأكاديمية
            وأقسامها. ويتألف مجلس العمداء من:
          </Text>
        </Text>
        <FlatList
          data={people1}
          renderItem={({ item }) => (
            <Text style={globalstyles.body4}>{item.name}</Text>
          )}
        />
        <Text style={globalstyles.body3}>
          3- مجالس الكليات :
          <Text style={globalstyles.body2}>
            يشكل في كل كلية مجلس، يسمى“ مجلس الكلية،” يقوم بدراسة شؤون الكلية
            الأكاديمية والإدارية، وتنسيق العلاقات بين أقسامها والكليات الأخرى في
            الجامعة ووحدات الجامعة الإدارية، ويتخذ القرارات ضمن صلاحياته، ويقدم
            التوصيات من خال العميد إلى الجهات المختصة في :الجامعة. ويتألف مجلس
            الكلية من
          </Text>
        </Text>
        <FlatList
          data={people2}
          renderItem={({ item }) => (
            <Text style={globalstyles.body4}>{item.name}</Text>
          )}
        />
        <Text style={globalstyles.body3}>
          4-مجالس الأقسام :
          <Text style={globalstyles.body2}>
            يشكل في كل قسم أكاديمي في الجامعة مجلس، يسمى “مجلس القسم،” ويتألف من
            جميع أعضاء الهيئة التدريسية فيه. ويقوم بدراسة شؤون القسم الأكاديمية،
            والشؤون المتعلقة بأعضاء هيئة التدريس، وتقديم التوصيات بشأنها لرئيس
            القسم، لرفعها إلى مجلس الكلية، ويعدّ رئيس القسم المسؤول لدى إدارة
            الجامعة عن إدارة شؤون القسم جميعها وتطبيق أنظمة الجامعة المتعلقة
            بإدارته. ومن أهم مسؤولياته: تنسيق المناهج والخطط التدريسية لمساقات
            القسم، وتقديم الاقتراحات إلى مجلس الكلية حول الخطط الدراسية، ومراجعة
            نتائج الطلبة في كل فصل وتقويمها.
          </Text>
        </Text>

        <Text style={globalstyles.body3}>
          5- مجلس الجامعة :
          <Text style={globalstyles.body2}>
            يضم رئيس الجامعة ونوابه ومساعديه، ومساعدي النائب الأكاديمي، وعمداء
            الكليات ورؤساء الأقسام، ومجالس الكليات، ومدراء المراكز العلمية
            والدوائر الإدارية، ومن مهامه: مناقشة آخر مستجدات الجامعة
            واستراتيجيتها، وما يستجد من أعمال
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}
export default Home040;
