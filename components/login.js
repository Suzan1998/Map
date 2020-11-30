import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserEmail: "",
      UserPassword: "",
    };
  }

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }
  static navigationOptions = {
    title: "ּ       تسجيل الدخول",
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: "darkgoldenrod",
      //Sets Header color
    },
    headerTintColor: "#fff",
    //Sets Header text color

    headerTitleStyle: {
      fontWeight: "bold",
      marginLeft: 5,
      fontSize: 20,
      fontFamily: "fontFamily",
      //Sets Header text style
    },
  };
  UserLoginFunction = () => {
    //
    if (this.state.UserEmail != "" && this.state.UserPassword != null) {
      if (
        (this.state.UserEmail == "halamostafa999@gmail.com" &&
          this.state.UserPassword == "123") ||
        (this.state.UserEmail == "Nour" && this.state.UserPassword) == "345"
      ) {
        Alert.alert("تم تسجيل الدخول بنجاح ");
        //this.props.navigation.navigate('Aap');
      }
    } else {
      Alert.alert("كلمة السر غير صحيحة , الرجاء المحاولة مره أخرى !");
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/login.png")} style={styles.p1} />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(UserEmail) => this.setState({ UserEmail })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("../assets/pass.png")} style={styles.p1} />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(UserPassword) => this.setState({ UserPassword })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.UserLoginFunction}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableHighlight>

        {/* <Icon.Button style={{paddingTop:10,backgroundColor:'blue'}}
           name="facebook"
         backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}>
تسجيل الدخول بواسطة الفيس بوك</Icon.Button>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text> هل نسيت كلمة السر ؟ </Text>
        </TouchableHighlight> */}

        <View>
          <TouchableHighlight>
            <Text
              style={styles.b2}
              onPress={() => this.props.navigation.navigate("Signin")}
            >
              Don't Have an Account?
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: 275,
    marginRight: 15,
  },
  inputs: {
    height: 50,
    width: 240,
    borderColor: "#005d66",
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginLeft: 10,
    flex: 1,
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
  loginButton: {
    backgroundColor: "#005d66",
  },
  b2: {
    color: "#14b3e3",
  },
  loginText: {
    color: "white",
  },
  p1: {
    width: 25,
    height: 25,
  },
});
export default Login;
