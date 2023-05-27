import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import Itemlist from "./screens/Itemlist";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Booking from "./screens/Booking";


const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Itemlist" component={Itemlist} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
