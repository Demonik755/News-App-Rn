import React, {useContext} from 'react';
import {FlatList, Image, StyleSheet, View, } from 'react-native';
import {AddNews} from "../components/AddNews";
import {News} from "../components/News";
import {NewsContext} from "../context/news/newsContext";
import {ScreenContext} from "../context/screen/screenContext";
export const MainScreen = () => {
    const {addNews, news, removeNews, } = useContext(NewsContext);
    const {changeScreen} = useContext(ScreenContext);

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