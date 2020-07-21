import React, { useState, useEffect} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions} from 'react-native';
import {AddNews} from "../components/AddNews";
import {News} from "../components/News";
export const MainScreen =({addNews, news, removeNews, openNews}) => {
    const [deviceWidth, setDeviceWidth] = useState (
        Dimensions.get("window").width - 40 *200
    );
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get("window").width - 40 *20;
            setDeviceWidth(width)
        };
        Dimensions.addEventListener("change", update);
        return () => {
            Dimensions.removeEventListener("change", update)
        }
    });

    let fullNews = (
        <View style={deviceWidth}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={news}
                renderItem={({item}) => (<News news={item}
                                               onOpen={openNews}
                                               onRemove={removeNews}/>) }/>
        </View>

    );
    if (!news.length) {
        fullNews = (
            <View  style={styles.imgWrapper}>
                <Image style={styles.img} source={require("../../assets/Newspaper.png")}/>
            </View>
        )
    }
        return (
            <View>
                <AddNews onSubmit={addNews}/>
                <View>{fullNews}</View>
            </View>
        );
};

const styles = StyleSheet.create({
    img: {
        width: 320,
        height: 330,
        resizeMode: "contain"
    },
});