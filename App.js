import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavBar} from "./src/Navbar";
import Screen from "./src/Screen";

export default function App() {
  return (
    <View  style={styles.container} >
      <View style={styles.NavBarContainer}>
        <NavBar/>
      </View>

      <View style={styles.NewsContainer}>
      <Screen/>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NewsContainer: {
    flex: 1
  },
});


