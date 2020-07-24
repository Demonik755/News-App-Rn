import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Keyboard, Dimensions} from 'react-native';
export const AddNews = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const pressHandler = () => {
        if (title.trim() && description.trim()) {
            onSubmit(title, description);
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
          <Button title="AddNews" onPress={pressHandler}/>
      </View>
  )
};
const styles = StyleSheet.create({
    block: {
        flexDirection: "column",
        alignItems: "center",
        height: Dimensions.get('window').height / 3 < 50 ? 100 : 120,
    },
    input: {
        width: "70%",
        borderWidth: 1,
        borderColor: "black",
        paddingBottom: 10,
        marginBottom: 10
    }
});