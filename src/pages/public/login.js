import React, { Component, useState } from "react";
import { View, Text, TextInput, StatusBar, Dimensions, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Login = ({navigation}) => {
  const [isShow, setisShow] = useState(false);

  const handleLogin = ({navigation}) => {
    navigation.navigate('HomeDrawer')
  }
  
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} objectFit="container" source={require("../../image/bgr.jpg")}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView>
        <View style={{ width: "100%", height: "100%" }}>
          <View style={{ width: "100%", height: "20%", marginTop: 0.2 * windowHeight, alignItems: "center" }}>
            <View style={{ width: "70%", height: 50, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ justifyContent: 'flex-end', width: '30%' }}>
                <Text style={{ color: "white", fontSize: 16 }}>Email :</Text>
              </View>
              <TextInput autoCapitalize="none" style={{ width: "70%", fontSize: 20, borderColor: "white", borderBottomWidth: 1, textAlign: "center", color: "white" }}></TextInput>
            </View>
            <View style={{ width: "70%", height: 50, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 30 }}>
              <View style={{ justifyContent: 'flex-end', width: '30%' }}>
                <Text style={{ color: "white", fontSize: 16 }}>Mật Khẩu :</Text>
              </View>
              <TextInput secureTextEntry={isShow ? false : true} style={{ width: "70%", fontSize: 20, borderColor: "white", borderBottomWidth: 1, textAlign: "center", color: "white", paddingRight: 40 }}></TextInput>
              {isShow && (
                <TouchableOpacity onPress={() => setisShow(!isShow)} style={{ position: 'absolute', width: 30, right: 0 }}>
                  <Icon style={{ color: "white", width: '100%', fontSize: 22 }} name="eye"></Icon>
                </TouchableOpacity>
              )}
              {!isShow && (
                <TouchableOpacity onPress={() => setisShow(!isShow)} style={{ position: 'absolute', width: 30, right: 0 }}>
                  <Icon style={{ color: "white", width: '100%', fontSize: 22 }} name="eye-slash"></Icon>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{ width: '100%', height: '25%', alignItems: 'center', marginTop: 0.1 * windowHeight }}>
            <TouchableOpacity onPress={handleLogin} style={{ width: '50%', height: '25%', borderWidth: 1, borderColor: 'white', borderRadius: '50%', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 25, width: '50%', height: '25%', borderWidth: 1, borderColor: 'white', borderRadius: '50%', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
