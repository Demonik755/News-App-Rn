import React, { } from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AddNews} from "../components/AddNews";
import {News} from "../components/News";
export const MainScreen =({addNews, news, removeNews, openNews}) => {
        return (
            <View>
                <AddNews onSubmit={addNews}/>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={news}
                    renderItem={({item}) => (<News news={item} onOpen={openNews} onRemove={removeNews}/>) }/>
            </View>
        );
};

const style = StyleSheet.create({

});