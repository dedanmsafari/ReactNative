import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
 if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet Connection</Text>
      </View>
    );

    return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 50,
    position: "relative",
    marginTop:Constants.statusBarHeight,
    width: "100%",
  zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
