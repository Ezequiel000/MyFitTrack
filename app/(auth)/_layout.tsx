import { View } from "react-native";
import { Link, Stack } from "expo-router";


export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};


export default function AuthLayout() {

  return <Stack >
  <Stack.Screen  name = {'Login'} options={{ title: "Login" }} />
  <Stack.Screen  name = {'SignUp'} options={{ title: "SignUp" }} />
  <Stack.Screen  name = {'index'} options={{ title: "Welcome!!", headerShown: false }} />

</Stack>
}