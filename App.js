import React, {useState} from 'react';
import {StyleSheet, View, FlatList } from 'react-native';
import {NavBar} from "./src/components/Navbar";
import {AddNews} from "./src/components/AddNews";
import {News} from "./src/components/News";

export default function App() {
    const [news, setNews] = useState([
        {id: 1, title: "hello", description: "hello world1"},
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
  return (
    <View>
        <NavBar/>
      <View style={styles.container}>
          <AddNews onSubmit={addNews}/>
          <FlatList
              keyExtractor={item => item.id.toString()}
              data={news}
              renderItem={({item}) => (<News news={item} onRemove={removeNews}/>) }/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      paddingVertical:  40,
      height: "90%",
  },
});


