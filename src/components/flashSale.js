import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import * as apis from "../api/index"
import { useSelector } from "react-redux";



const FlashSale = ({ widthScreen }) => {
   
    // const {dataBanner, dataProductSale} = useSelector((state) => state.app);
    // console.log(dataProductSale)
    const [dataBanner, setDataBanner] = useState();

    const FetchData = async () => {
        try {
            const response = await apis.apiProductSale();
            console.log(response.product[0].image[0])
            setDataBanner(response.product)
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
        }
    }
    useEffect(() => {
        FetchData();
    }, []);
    console.log(dataBanner)
    return (
        <View style={{ width: widthScreen, backgroundColor: 'white', alignItems: 'center' }}>
            <View style={{ width: widthScreen }} >
                <View style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, flexDirection: 'row', height: 40, width: '100%' }}>
                    <Text style={{ fontSize: 14, color: 'red', textTransform: 'uppercase', fontWeight: 600 }}>F<Icon name='bolt' />ash Sale</Text>
                    <Text style={{ fontSize: 12, color: '#666', alignItems: 'center' }}>Xem tất cả <Icon size={12} name='angle-right' /></Text>
                </View>
                <View style={{ height: 200, width: widthScreen }}>
                    <FlatList data={dataBanner}
                        keyExtractor={item => item._id}
                        style={{ flex: 1, borderWidth: 1, }}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ width: widthScreen * 0.35, height: 200 }} >
                                    <View >
                                        <Image source={{ uri: item.image[0] }} style={{ width: widthScreen *1/3, height:150, resizeMode:'cover' }} />
                                    </View>
                                </View>
                            )
                        }} />
                </View>
            </View>
        </View>
    )
}

export default FlashSale
