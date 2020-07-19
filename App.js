import React, {useState} from 'react';
import {StyleSheet, View } from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {NewsScreen} from "./src/screens/NewsScreen";

export default function App() {
    const [newsId, setNewsId] = useState(null);
    const [news, setNews] = useState([
        {id: 1, title: "hellodawdawdwawdawdd a wad  awd awd ad", description: "hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1hello world1ABG"},
        {id: 2, title: "hello", description: "hello world2"},
        {id: 3, title: "hello", description: "hello world3"},
        {id: 4, title: "hello", description: "hello world4"},
        {id: 5, title: "hello", description: "hello world5"},
        {id: 6, title: "hello", description: "hello world6"},
        {id: 7, title: "hello", description: "hello world7"},
        {id: 8, title: "hello", description: "hello world8"},
        {id: 9, title: "hello", description: "hello world9"},
        {id: 10, title: "hello", description: "hello world10"},
    ]);
    const addNews =(title,description) => {
        setNews(prev =>[
            {
                id: Date.now().toString(),
                title: title,
                description:description,
            },
            ...prev,
        ])
    };
    const removeNews = id => {
        setNews(prev => prev.filter(news=>news.id !==id))
    };
    let fullNews = (
        <MainScreen addNews={addNews} removeNews={removeNews} news={news} openNews={setNewsId}/>
    );
    if (newsId) {
        const selectedNews = news.find(news => news.id === newsId);
        fullNews = <NewsScreen news={selectedNews} goBack={()=>setNewsId(null)}/>
    }

  return (
    <View>
        <NavBar/>
      <View style={styles.container}>
          {fullNews}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      paddingVertical:  40,
      height: "87%",
  },
});


