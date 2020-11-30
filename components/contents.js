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
function Contents({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
  };
  const pressHandler1 = () => {
    navigation.navigate("Home00");
  };
  const pressHandler2 = () => {
    navigation.navigate("Home01");
  };
  const pressHandler3 = () => {
    navigation.navigate("Home02");
  };
  const pressHandler4 = () => {
    navigation.navigate("Home03");
  };
  const pressHandler5 = () => {
    navigation.navigate("Home04");
  };
  const pressHandler50 = () => {
    navigation.navigate("Home040");
  };
  const pressHandler6 = () => {
    navigation.navigate("Home05");
  };

  const pressHandler7 = () => {
    navigation.navigate("Home06");
  };
  const pressHandler8 = () => {
    navigation.navigate("Home07");
  };
  const pressHandler9 = () => {
    navigation.navigate("Home08");
  };
  const pressHandler10 = () => {
    navigation.navigate("Home09");
  };
  const pressHandler11 = () => {
    navigation.navigate("Home010");
  };
  const pressHandler12 = () => {
    navigation.navigate("Home011");
  };
  const pressHandler13 = () => {
    navigation.navigate("Home012");
  };

  const pressHandler14 = () => {
    navigation.navigate("Home06");
  };
  const pressHandler15 = () => {
    navigation.navigate("Home07");
  };
  const pressHandler16 = () => {
    navigation.navigate("Home08");
  };
  const pressHandler17 = () => {
    navigation.navigate("Home09");
  };
  const pressHandler18 = () => {
    navigation.navigate("Home010");
  };
  const pressHandler19 = () => {
    navigation.navigate("Home011");
  };
  const pressHandler20 = () => {
    navigation.navigate("Home012");
  };

  const pressHandler21 = () => {
    navigation.navigate("Home06");
  };
  const pressHandler22 = () => {
    navigation.navigate("Home07");
  };
  const pressHandler23 = () => {
    navigation.navigate("Home08");
  };
  const pressHandler24 = () => {
    navigation.navigate("Home09");
  };
  const pressHandler25 = () => {
    navigation.navigate("Home010");
  };
  const pressHandler26 = () => {
    navigation.navigate("Home011");
  };
  const pressHandler27 = () => {
    navigation.navigate("Home012");
  };

  const pressHandler28 = () => {
    navigation.navigate("Home06");
  };
  const pressHandler29 = () => {
    navigation.navigate("Home07");
  };
  const pressHandler30 = () => {
    navigation.navigate("Home08");
  };
  const pressHandler31 = () => {
    navigation.navigate("Home09");
  };
  const pressHandler32 = () => {
    navigation.navigate("Home010");
  };
  const pressHandler33 = () => {
    navigation.navigate("Home011");
  };
  const pressHandler34 = () => {
    navigation.navigate("Home012");
  };

  const pressHandler35 = () => {
    navigation.navigate("Home06");
  };
  const pressHandler36 = () => {
    navigation.navigate("Home07");
  };
  const pressHandler37 = () => {
    navigation.navigate("Home08");
  };
  const pressHandler38 = () => {
    navigation.navigate("Home09");
  };

  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.header}>
        <Text style={styles.header}>
          Contents{" "}
          <Image source={require("../assets/cont2.png")} style={styles.p1} />
        </Text>
      </View>
      <ScrollView>
        <View style={globalstyles.button2}>
          <Button
            title="Introduction"
            color="#093b40"
            onPress={pressHandler1}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="University of history"
            color="#093b40"
            onPress={pressHandler2}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Vision of the University"
            color="#093b40"
            onPress={pressHandler3}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Message of the University"
            color="#093b40"
            onPress={pressHandler4}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Strategic Plan Objectives"
            color="#093b40"
            onPress={pressHandler5}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="An-Najah University branches"
            color="#093b40"
            onPress={pressHandler}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Councils of An-Najah University"
            color="#093b40"
            onPress={pressHandler50}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Deanship of Student Affairs"
            color="#093b40"
            onPress={pressHandler6}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button title="The library" color="#093b40" onPress={pressHandler7} />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Deanship of Admission and Regstration"
            color="#093b40"
            onPress={pressHandler8}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Circle of Public Relations"
            color="#093b40"
            onPress={pressHandler9}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Instructions for granting a bachelors degree"
            color="#093b40"
            onPress={pressHandler10}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Branches of the An-najah University"
            color="#093b40"
            onPress={pressHandler11}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="University requirements"
            color="#093b40"
            onPress={pressHandler12}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Level exam of English language and Computer science"
            color="#093b40"
            onPress={pressHandler13}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Duration of the study and the burden of the study"
            color="#093b40"
            onPress={pressHandler14}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button title="Attendance" color="#093b40" onPress={pressHandler15} />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Examinations, Tags and Averages"
            color="#093b40"
            onPress={pressHandler16}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Academic alarm"
            color="#093b40"
            onPress={pressHandler17}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Withdrawal of courses and add them ,"
            color="#093b40"
            onPress={pressHandler18}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Re of courses study"
            color="#093b40"
            onPress={pressHandler19}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Delay the study by the interruption, and withdraw from the university"
            color="#093b40"
            onPress={pressHandler20}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Moving from other universities"
            color="#093b40"
            onPress={pressHandler21}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Calculated hours from outside the An-najah University for thier students"
            color="#093b40"
            onPress={pressHandler22}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Moving from a program to another in the university"
            color="#093b40"
            onPress={pressHandler23}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Requirements for obatining bchelors degree"
            color="#093b40"
            onPress={pressHandler24}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="General provisions"
            color="#093b40"
            onPress={pressHandler25}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Instructions for granting a Bachelor of Physic Medical Sciences"
            color="#093b40"
            onPress={pressHandler26}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Instructins Grant the Dr. in Medicine"
            color="#093b40"
            onPress={pressHandler27}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Faculty of Honor"
            color="#093b40"
            onPress={pressHandler28}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="The actions of retification the medical report of students"
            color="#093b40"
            onPress={pressHandler29}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="System of procedures for adjusting students violations and their provisions"
            color="#093b40"
            onPress={pressHandler30}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Facilities,services and activities implemented by the University for students"
            color="#093b40"
            onPress={pressHandler31}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Scientific centers at university"
            color="#093b40"
            onPress={pressHandler32}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Units and specialized centers at university"
            color="#093b40"
            onPress={pressHandler33}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Recruitment Unit and Graduates Affairs"
            color="#093b40"
            onPress={pressHandler34}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="English language placement test"
            color="#093b40"
            onPress={pressHandler35}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Computer placement test for new students"
            color="#093b40"
            onPress={pressHandler36}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="Placement test in English"
            color="#093b40"
            onPress={pressHandler37}
          />
        </View>
        <View style={globalstyles.button2}>
          <Button
            title="A sample of previous tests"
            color="#093b40"
            onPress={pressHandler38}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    height: 100,
    alignContent: "center",
    justifyContent: "center",
  },
  p1: {
    width: 60,
    height: 60,
  },
});
export default Contents;
