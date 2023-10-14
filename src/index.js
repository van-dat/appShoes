import React, { Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const homeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Screen} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  )
}

export default rootComponent = function () {
    return (
        <div>
            return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="homeDrawer" component={homeDrawer} />
                </Stack.Navigator>
            </NavigationContainer>
            );
        </div>
    )
}

