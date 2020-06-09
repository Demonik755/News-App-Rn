import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class Screen extends Component {
    render() {
        return (
            <Container >
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.sensawine.com/Blog/wp-content/uploads/2012/03/news.jpg' }} />
                            </Left>
                            <Body>
                                <Text >Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
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
        );
    }
}