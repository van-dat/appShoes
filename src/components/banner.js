import React, { Component, useEffect, useRef, useState } from "react";
import { View, Dimensions, FlatList, Image } from "react-native";
const banner = () => {
    const widthScreen = Dimensions.get("window").width;
    const heightScreen = Dimensions.get("window").height;

    const [indexImage, setIndexImage] = useState(0);
    const data = [
        {
            id: 1,
            image: "https://thietke6d.com/wp-content/uploads/2021/05/banner-quang-cao-giay.png",
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JvCbVzYa6G8sNdWpQlwvrJGmHUPXhHYLUw&usqp=CAU",
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ51lfYUeeISmrMCHclTDB2EJCFhhyXXLWgg&usqp=CAU",
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAUlnbsT8JKQq5it5uMo02DknRhzw5gd5gg&usqp=CAU",
        },
    ];
    const autoScroll = useRef();

    const handleScroll = (e) => {
        if (!e) return;
        const { nativeEvent } = e;
        if (nativeEvent && nativeEvent.contentOffset) {
            const currentX = nativeEvent.contentOffset.x;
            let imageIndex = 0;
            if (nativeEvent.contentOffset.x > 0) {
                imageIndex = Math.floor((nativeEvent.contentOffset.x + widthScreen / 2) / widthScreen);
            }
            setIndexImage(imageIndex);
        }
    };

    useEffect(() => {
        if (data.length > 0) {
            const scrollInterval = setInterval(() => {
                if (indexImage === data.length - 1) {
                    autoScroll.current.scrollToIndex({ animated: true, index: 0 });
                } else {
                    autoScroll.current.scrollToIndex(
                        {
                            index: indexImage + 1,
                            animated: true
                        }
                    )
                }
            }, 2000);

            return () => {
                clearInterval(scrollInterval);
            };
        }
    }, [indexImage]);


    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ width: widthScreen * 0.92, height: heightScreen * 0.2, marginVertical: 15, borderRadius: 16  }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    style={{ flex: 1, borderRadius: 16 }}
                    ref={autoScroll}
                    horizontal={true}
                    data={data}
                    scrollEventThrottle={16}
                    initialScrollIndex={indexImage}
                    onScroll={handleScroll}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item.image }} style={{ width: widthScreen * 0.92, height: "100%"  }} />
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default banner;
