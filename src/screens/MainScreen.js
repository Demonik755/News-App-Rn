import React, {useContext, useEffect, useCallback} from 'react';
import {FlatList, Image, StyleSheet, View, Text } from 'react-native';
import {AddNews} from "../components/AddNews";
import {News} from "../components/News";
import {NewsContext} from "../context/news/newsContext";
import {ScreenContext} from "../context/screen/screenContext";
import {Loader} from "../components/UI/Loader";

export const MainScreen = () => {
    const {addNews, news, removeNews, fetchNews, error, loading } = useContext(NewsContext);
    const {changeScreen} = useContext(ScreenContext);

    const loadNews = useCallback(async () => await fetchNews(), [fetchNews]);

    useEffect(() =>{
        loadNews();
        return function cleanup() {
            API.unsubscribe()
        }
    }, []);

    if (loading) {
        return (
            <Loader/>
        )
    }
    // if (error) {
    //     return (
    //         <View>
    //             <Text>
    //                 {error}
    //             </Text>
    //         </View>
    //         )
    // }

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
            <View  style={styles.imgWrapper}>
                <Image style={styles.img} source={require("../../assets/Newspaper.png")}/>
            </View>
        )
    }
        return (
            <View>
                <AddNews onSubmit={addNews}/>
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