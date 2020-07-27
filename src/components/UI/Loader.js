import React from 'react';
import {StyleSheet, View, ActivityIndicator, } from 'react-native';

export const Loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>
    )
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});