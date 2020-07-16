import React, {useState} from 'react';
import { StyleSheet, TextInput,Button, View, Alert } from 'react-native';
export const AddNews = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const pressHandler = () => {
        if (title.trim() && description.trim()) {
            onSubmit(title, description);
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
    },
    input: {
        width: "70%",
        borderWidth: 1,
        borderColor: "black",
        paddingBottom: 10,
        marginBottom: 10
    }
});