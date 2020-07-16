import React, {useState} from 'react';
import {StyleSheet, View, } from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {AddNews} from "./src/components/AddNews";
import {News} from "./src/components/News";

export default function App() {
    const [news, setNews] = useState([]);
    const addNews =(title,description) => {
        setNews(prev =>[
            ...prev,
            {
                id: Date.now().toString(),
                title: title,
                description:description,
            }
        ])
    };
  return (
    <View>
        <NavBar/>
      <View style={styles.container}>
          <AddNews onSubmit={addNews}/>

      </View>
        <View>
            {news.map(news=> <News key={news.id} news={news}/>)}
        </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical:  40
  },
});


