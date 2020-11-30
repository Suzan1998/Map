import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalstyles } from "../styles/global";
function Home09() {
  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={globalstyles.body}>
          Instructions for granting a bachelors degree
        </Text>
      </View>
      <ScrollView style={globalstyles.scroll}>
        <View style={globalstyles.header}>
          <Text style={globalstyles.body}>المادة(1):</Text>
        </View>
        <Text style={globalstyles.body2}>
          تسمى هذه التعليمات تعليمات معدلة لتعليمات منح درجة البكالوريوس في
          جامعة النجاح الوطنية لسنة 2013 / 2014 وتطبق على طلبة الجامعة ابتداءً
          من الفصل الأول 2013 / 2014 .
        </Text>
        <View style={globalstyles.header}>
          <Text style={globalstyles.body}>المادة(2):</Text>
        </View>
        <Text style={globalstyles.body2}>
          تسري أحكام هذه التعليمات على الطلبة المنتظمين المسجلين لنيل درجة
          البكالوريوس في كليات الجامعة: العلوم، العلوم الإنسانية، الشريعة،
          العلوم التربوية وإعداد المعلمين، الهندسة وتكنولوجيا المعلومات، الطب
          وعلوم الصحة، الاقتصاد والعلوم الاجتماعية، الزراعة والطب البيطري،
          القانون، الفنون الجميلة.
        </Text>
        <View style={globalstyles.header}>
          <Text style={globalstyles.body}>المادة(3):</Text>
        </View>
        <Text style={globalstyles.body2}>
          يقر مجلس العمداء الخطط الدراسية التي تؤدي إلى نيل درجة البكالوريوس في
          التخصصات التي تقدمها الكليات المختلفة بناءً على توصية من مجالس الكليات
          وتنسيب من مجالس الأقسام الأكاديمية المختلفة.
        </Text>
        <View style={globalstyles.header}>
          <Text style={globalstyles.body}>المادة(4):</Text>
        </View>
        <Text style={globalstyles.body2}>
          (أ) تنظم الخطط الدراسية لتكون الساعات المعتمدة المطلوبة للحصول على
          درجة البكالوريوس كما هو موضح في أفرع جامعة النجاح الوطنية .
        </Text>
      </ScrollView>
    </View>
  );
}
export default Home09;
