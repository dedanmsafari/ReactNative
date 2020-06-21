import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const NewListingButton = ({onPress}) => {
  return (
      
      <TouchableOpacity onPress={onPress}>

    <View style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        color={colors.white}
      />
    </View>
      </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 40,
    justifyContent: "center",
    height: 80,
    borderWidth: 10,
    borderColor: colors.white,
    bottom: 30,
    width: 80,
  },
});
