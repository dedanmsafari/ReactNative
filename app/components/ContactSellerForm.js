import React from "react";
import { Keyboard, Alert } from "react-native";
import messagesApi from "../api/messages";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "./forms";
import { Notifications } from "expo";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Messages"),
});
const ContactSellerForm = ({ listing }) => {

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await  messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Could not send the message to the seller");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome",
      body: "Your message was sent to the seller",
    });
  };
  return (
    <Form
      initialValues={{ messages: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={1}
        placeholder="Messages..."
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
};

export default ContactSellerForm;
