import React, { useContext} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {NavBar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {NewsScreen} from "./screens/NewsScreen";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout =() => {
    const {newsId} = useContext(ScreenContext);
    return (
        <View>
            <NavBar/>
            <View style={styles.container}>
                {newsId ? (<NewsScreen/>) : (<MainScreen/>)}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical:  20,
        height: Dimensions.get('window').height / 3 < 250 ? 300 : 190,
    },
});


