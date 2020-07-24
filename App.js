import React, {useState} from 'react';
import {StyleSheet, View, Dimensions } from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {NewsScreen} from "./src/screens/NewsScreen";


export default function App() {
    const [newsId, setNewsId] = useState(null);
    const [news, setNews] = useState([]);

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
    let content = (
        <MainScreen addNews={addNews} removeNews={removeNews} news={news} openNews={setNewsId}/>
    );
    if (newsId) {
        const selectedNews = news.find(news => news.id === newsId);
        content = <NewsScreen news={selectedNews} goBack={()=>setNewsId(null)}/>
    }

  return (
    <View>
        <NavBar/>
      <View style={styles.container}>
          {content}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      paddingVertical:  20,
      height: Dimensions.get('window').height / 3 < 250 ? 300 : 190,
  },
});


