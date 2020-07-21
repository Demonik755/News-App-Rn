import React from 'react';
import { StyleSheet, View, Text,Image,Button, Dimensions } from 'react-native';
export const NewsScreen = ({news, goBack}) =>  {
        return (
           <View>
               <View style={styles.fullNewsWrapper}>
                   <View style={styles.headerNewsWrapper}>
                       <View style={{height: "40%", width: "40%", }}>
                           <Image style={styles.img} source={{uri: "http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg"}}/>
                       </View>
                       <View style={{height: "60%", width: "60%", }}>
                           <Text style={styles.title}>
                               {news.title}
                           </Text>
                       </View>
                   </View>
                   <Text style={styles.description}>
                       {news.description}
                   </Text>
               </View>
               <View style={styles.btn}>
                   <Button  title="Back" onPress={goBack}> </Button>
               </View>
           </View>

        );
};

const styles = StyleSheet.create({
    fullNewsWrapper: {
        borderRadius: 10,
        shadowRadius: 5,
        shadowOpacity: 0.6,
        shadowOffset: {width: 1, height: 1},
        elevation: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    headerNewsWrapper: {
      flexDirection: "row",
      justifyContent: "center"
    },
    title: {
        fontSize: 15,
        textTransform: "uppercase",
    },
    img: {
        height: 100,
        width: 100
    },
    description: {
        paddingVertical: 10,
    },
    btn: {
        flexDirection: 'column',
    }
});