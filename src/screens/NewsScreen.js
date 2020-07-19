import React from 'react';
import { StyleSheet, View, Text,Image,Button } from 'react-native';
import { Container,  Content, Card, CardItem, Left, Body } from 'native-base';
export const NewsScreen = ({news, goBack}) =>  {
        return (
            <View style={styles.fullNewsWrapper}>
                <Container>
                    <Content>
                        <Card >
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text style={styles.title}>{news.title}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={{uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg'}} style={{height: 180, width: 300, flex: 1}}/>
                                    <Text style={styles.description}>
                                        {news.description}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
                <View style={styles.btn}>
                    <Button  title="Back" onPress={goBack}> </Button>
                </View>
            </View>

        );
};

const styles = StyleSheet.create({
    fullNewsWrapper: {
        flexDirection: 'column',
        flex: 1,
    },
    title: {
        fontSize: 25,
        textTransform: "uppercase",
    },
    description: {
        paddingVertical: 10,
    },
    btn: {

    }
});