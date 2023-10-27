import React, { Component, useState } from "react";
import { View, Text, Image, FlatList, Dimensions } from "react-native";
const widthScreen = Dimensions.get('window').width
const category = () => {
    const data = [
        {
            id: 1,
            path: "Home",
            link: 'https://thumbs.dreamstime.com/b/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg'
        },
        {
            id: 2,
            path: "Home",
            link: 'https://thumbs.dreamstime.com/b/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg'

        },
        {
            id: 3,
            path: "Home",
            link: 'https://thumbs.dreamstime.com/b/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg'

        },
        {
            id: 4,
            path: "Home",
            link: 'https://thumbs.dreamstime.com/b/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg'

        },
        {
            id: 5,
            path: "Home",
            link: 'https://thumbs.dreamstime.com/b/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg'

        }
    ];
    return (
        <View style={{ width: "100%", alignItems: "center" ,marginTop: 10 }}>
            <View>
                <Text></Text>
            </View>
            <View style={{ width: widthScreen * 0.92, height: 60, flexDirection: "row" }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1 }}
                    horizontal={true}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View >
                                <Image source={{ uri: item.link }} style={{ width: 58, marginRight: 20, height: "100%", borderRadius: 50 }} />
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    );
};

export default category;
