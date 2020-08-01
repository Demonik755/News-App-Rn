import React, {useState,useContext} from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Keyboard, Dimensions} from 'react-native';
import {NewsContext} from "../context/news/newsContext";
export const AddNews = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {addNews} = useContext(NewsContext);
    const pressHandler = (onsubmit) => {
        if (title.trim() && description.trim()) {
           onsubmit(title, description);
            Keyboard.dismiss();
        }else {
            Alert.alert("Input cannot be empty!")
        }

    };
  return (
      <View style ={styles.block}>
          <TextInput
              style={styles.input}
              onChangeText={setTitle}
              value={title}
              placeholder="Title"
          />
          <TextInput
              style={styles.input}
              onChangeText={setDescription}
              value={description}
              placeholder="Description"
          />
          <Button title="AddNews" onPress={()=>pressHandler(addNews)}/>
      </View>
  )
};
const styles = StyleSheet.create({
    block: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 30,
        // height: Dimensions.get('window').height / 3 < 50 ? 100 : 120,
    },
    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "black",
        paddingBottom: 20,
        marginBottom: 20
    }
});