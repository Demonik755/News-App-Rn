import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        height: 65,
        alignItems: "center",
        justifyContent: "center"
    },
    NavBarTitle: {
        color: "#fff",
        fontSize: 26
    }
});