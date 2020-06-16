import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ uri, onChangeImage }) => {
  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("Error! First allow access to your phone gallery");
    }
  };

  const handlePress = () => {
    if (!uri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to remove Image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("An error occured,Please try again");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>

        {uri ? (
          <Image source={{ uri: uri }} style={styles.Image} />
        ) : (
          <MaterialCommunityIcons
            name="camera-outline"
            color={colors.light}
            size={50}
          />
        )}
     
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.medium,
    borderRadius: 20,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
});
