import React, {useState, useContext} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {NavBar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {NewsScreen} from "./screens/NewsScreen";
import {NewsContext} from "./context/news/newsContext";

export const MainLayout =() => {
    const {news, addNews, removeNews} = useContext(NewsContext);
    const [newsId, setNewsId] = useState(null);
    // const [news, setNews] = useState([]);

    if (newsId) {
        const selectedNews = news.find(news => news.id === newsId);
        content = <NewsScreen news={selectedNews} goBack={()=>setNewsId(null)}/>
    }
    // const addNews =(title,description) => {
    //     setNews(prev =>[
    //         {
    //             id: Date.now().toString(),
    //             title: title,
    //             description:description,
    //         },
    //         ...prev,
    //     ])
    // };
    // const removeNews = id => {
    //     setNews(prev => prev.filter(news=>news.id !==id))
    // };
    let content = (
        <MainScreen addNews={addNews} removeNews={removeNews} news={news} openNews={setNewsId}/>
    );
    return (
        <View>
            <NavBar/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical:  20,
        height: Dimensions.get('window').height / 3 < 250 ? 300 : 190,
    },
});


