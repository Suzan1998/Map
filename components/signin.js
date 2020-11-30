import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground,
  Image,
  Alert,
} from "react-native";

//import Aap from '../app/guide';
export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      UserEmail: "",
      UserPassword: "",
    };
  }

  UserRegistrationFunction = () => {
    const { UserName } = this.state;
    const { UserEmail } = this.state;
    const { UserPassword } = this.state;

    fetch(
      "http:// 192.168.1.110/projmodi(1)/projmodi/proj/user_registration.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: UserName,

          email: UserEmail,

          password: UserPassword,
        }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //' تم تسجيل الدخول بنجاح '
        if (responseJson === " تم تسجيل الدخول بنجاح ") {
          Alert.alert(responseJson);
          //Then open Profile activity and send user email to profile activity.
          //this.props.navigation.navigate('Aap');
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }

  static navigationOptions = {
    title: " رجوع",
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: "#dcdcdc",
      //Sets Header color
    },
    headerTintColor: "black",

    headerTitleStyle: {
      fontWeight: "bold",
      // margin:210,
      fontSize: 20,
      // fontFamily:'fontFamily',
      //Sets Header text style
    },
  };

  render() {
    return (
      //   <ImageBackground source={require('./signup.png')} style={{width: '50%', height: '50%'}}>

      <View style={styles.container}>
        <Text style={styles.txt}>الحصول على حساب مجاني</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسم المستخدم"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(UserName) => this.setState({ UserName })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="الايميل"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(UserEmail) => this.setState({ UserEmail })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="كلمة السر"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(UserPassword) => this.setState({ UserPassword })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={this.UserRegistrationFunction}
        >
          <Text style={styles.signUpText}>تسجيل</Text>
        </TouchableHighlight>
      </View>
      //  </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#DCDCDE",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginRight: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
    // paddingBottom=20,
  },
  signUpText: {
    color: "white",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 60,
    paddingBottom: 80,
  },
});
