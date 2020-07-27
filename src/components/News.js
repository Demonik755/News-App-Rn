import React, {} from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import {Body, Container, Content, Left, List, ListItem, Right, Text, Thumbnail, Button} from "native-base";
import Swipeable from "react-native-gesture-handler/Swipeable";

export const News = ({news, onRemove, onOpen}) => {
    const rightActions= (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-50, 200],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });
        return(
            <TouchableOpacity onPress={()=>onRemove(news.id)}>
                <View style={styles.rightAction}>
                    <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
                        Delete
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        )
    };
    return (
        <View style={styles.news} >
            <Container >
                <Content>
                    <List>
                        <Swipeable renderRightActions={rightActions} >
                            <ListItem thumbnail >
                                <Left>
                                    <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                                </Left>
                                <Body>
                                    <Text >{news.title}</Text>
                                    <Text note numberOfLines={1.5}>{news.description}. .</Text>
                                </Body>
                                <Right>
                                    <Button transparent onPress={() => onOpen(news.id)}>
                                        <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        </Swipeable>
                    </List>
                </Content>
            </Container>
        </View>
    )
};
const styles = StyleSheet.create({
    news: {
        flexDirection: 'row',
        height: 100,
    },
    rightAction: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%"

    },
    actionText:{
        color: "#fff",
        fontWeight: "600",
        padding: 28,
    }

});
