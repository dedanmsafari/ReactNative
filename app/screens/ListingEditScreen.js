import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import listingsApi from "../api/listings";
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Select atleast one Image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { label: "Clothing", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Camera", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#26cbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  { label: "Books", value: 8, backgroundColor: "purple", icon: "book" },
  { label: "Other", value: 9, backgroundColor: "grey", icon: "drag-variant" },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      console.log(result.originalError);
      
      return alert("Could not save the listing");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <FormField
          maxLength={20}
          autoCapitalize="words"
          name="title"
          placeholder="Title"
        />

        <FormField
          maxLength={8}
          keyboardType="number-pad"
          name="price"
          width={120}
          placeholder="Price"
        />
        <Picker
          items={categories}
          placeholder="Category"
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem} //if present render the categorypicker --if not present render FlatList
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
