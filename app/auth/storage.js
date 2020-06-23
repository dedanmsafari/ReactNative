import * as SecureStore from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error Storing the Auth Token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error Retrieving the Auth Token", error);
  }
};
const getUser =  async () => {
  const token = await getToken();
  return token ? JwtDecode(token) : null;
}
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  getUser,
  getToken,
  storeToken,
  removeToken,
};
