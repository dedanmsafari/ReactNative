import React, { useState } from "react";
import { StyleSheet, Alert, SafeAreaView,View,Dimensions, Button,StatusBar, Platform,Image,Text, ImageBackground, TextInput, Switch} from "react-native";
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/Text";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from "./app/components/Button";
import Card from './app/components/Card';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen"
import Icon from './app/components/Icon';
import Screen from './app/components/Screen'
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/TextInput";
import colors from "./app/config/colors";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
export default function App() {
 
 
  return (
    

  <ListingEditScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef",
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
