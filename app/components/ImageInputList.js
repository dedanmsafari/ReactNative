import React,{useRef} from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris =[] , onRemove, onAdd }) => {
  
  const scrollView = useRef();

    return (
        <View>

      <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>

    <View style={styles.container}>
      {imageUris.map( uri => (
          <View key={uri} style={styles.image}>
              <ImageInput uri={uri} onChangeImage={() => onRemove(uri)} />

          </View>
      ))}
      <ImageInput  onChangeImage={(uri) => onAdd(uri)} />
    </View>
      </ScrollView>
        </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image:{
      marginRight: 10,
  }
});
