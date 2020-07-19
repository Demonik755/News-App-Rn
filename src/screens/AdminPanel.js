import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const AdminPanel = ({navigation}) => {

    return (
        <View style={styles.NavBarContainer}>
            <Text style={styles.NavBarTitle}>
               admin
            </Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
};