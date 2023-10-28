import React, { Component } from "react";
import "react-native-gesture-handler";
import Screen from "./src/pages/screen/home"
import Login from "./src/pages/public/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDispatch } from "react-redux"


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Screen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
