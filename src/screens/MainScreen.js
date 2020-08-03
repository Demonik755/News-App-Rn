import React, {useContext, useEffect, useCallback,} from 'react';
import {FlatList, Image, StyleSheet, View,} from 'react-native';
import {News} from "../components/News";
import {NewsContext} from "../context/news/newsContext";
import {ScreenContext} from "../context/screen/screenContext";

export const MainScreen = ({}) => {
    const { news, removeNews, fetchNews, } = useContext(NewsContext);
    const {changeScreen} = useContext(ScreenContext);

    const loadNews = useCallback(async () => await fetchNews(), [fetchNews]);

    useEffect(() =>{
        loadNews();
    }, []);

    let content = (
        <View >
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={news}
                renderItem={({item}) => (<News news={item}
                                               onOpen={changeScreen}
                                               onRemove={removeNews}/>) }/>
        </View>

    );
    if (!news.length) {
        content = (
            <View >
                <Image style={styles.img} source={require("../../assets/Newspaper.png")}/>
            </View>
        )
    }
        return (
            <View>
                <View>{content}</View>
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