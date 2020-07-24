import React from 'react';
import {Dimensions, StyleSheet, Text, View,} from 'react-native';

export const NavBar = () => {
    return (
        <View style={styles.NavBarContainer}>
            <Text style={styles.NavBarTitle}>
                News App
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    NavBarContainer: {
        backgroundColor: "#0678ba",
        height: Dimensions.get('window').height / 3 < 50 ? 100 : 50,
        alignItems: "center",
        justifyContent: "center"
    },
    NavBarTitle: {
        color: "#fff",
        fontSize: 25
    }
});