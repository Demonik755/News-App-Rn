import React, {useState} from 'react';
import { StyleSheet, TextInput,Button, View } from 'react-native';
export const AddNews = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const pressHandler = () => {
      onSubmit(value);
        setValue('')
    };
  return (
      <View style ={styles.block}>
          <TextInput
              style={styles.input}
              onChangeText={setValue}
              value={value}
              placeholder="Title"
          />
          {/*<TextInput*/}
          {/*    style={styles.input}*/}
          {/*    onChangeText={text=> setValue(text)}*/}
          {/*    value={value}*/}
          {/*    placeholder="Description"*/}
          {/*/>*/}
          <Button title="AddNews" onPress={pressHandler}/>
      </View>
  )
};
const styles = StyleSheet.create({
    block: {
        flexDirection: "column",
        alignItems: "center",
        // flex: 1
    },
    input: {
        width: "70%",
        borderWidth: 1,
        borderColor: "black",
        paddingBottom: 10,
        marginBottom: 10

    }
});