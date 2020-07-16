import React from 'react';
import { StyleSheet,  View } from 'react-native';
import {Body, Container, Content, Left, List, ListItem, Right, Text, Thumbnail, Button} from "native-base";
export const News = ({news}) => {
    return (
        <View style={styles.news}>
            <Container >
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >{news.title}</Text>
                                <Text note numberOfLines={2}>{news.description}. .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        </View>
    )
};
const styles = StyleSheet.create({
    news: {
        flexDirection: 'row',
        height: 100
    }
});
