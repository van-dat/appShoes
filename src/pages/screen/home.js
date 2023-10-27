import React, { useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, TextInput,Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Category from '../../components/category';
import FlashSale from '../../components/flashSale';
import Banner from '../../components/banner'


const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
const Screen = ({ navigation }) => {



  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#EDF1F4' }}>
      <SafeAreaView>
        <StatusBar />
        <View style={{ alignItems: 'center' }} >
          <View style={{ height: 50, alignItems: 'center', width: '92%', justifyContent: 'space-between', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.toggleDrawer() }} >
              <Icon style={{ color: '#333', fontSize: 28 }} name='bars'></Icon>
            </TouchableOpacity>
            <TouchableOpacity  >
              <Icon style={{ color: '#333', fontSize: 22 }} name='bell'></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '92%', backgroundColor: 'white', height: 45, borderRadius: 14, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 10, alignItems: 'center' }}>
            <TextInput placeholder='Nhập để tìm kiếm...' autoCapitalize='none' style={{ height: '100%', width: '90%', fontSize: 18 }}>
            </TextInput>
            <TouchableOpacity style={{ padding: 8, borderRadius: 20, backgroundColor: '#333' }}>
              <Icon style={{ color: 'white', fontSize: 22 }} name='search'></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <Banner />
        {/* <Category /> */}
        <FlashSale widthScreen = {widthScreen}/>
      </SafeAreaView>
    </View>
  );
};



export default Screen;