import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import AppButton from "../components/Button";
import routes from '../navigation/routes'
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell Items you dont need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
        <View style={styles.registerButton} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
