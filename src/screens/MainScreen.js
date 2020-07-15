import React, { } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export const MainScreen =() => {
    // const [news, setNews] = useState([]);
    // const addNews =(title, description, image) => {
    //     setNews(prev =>[
    //         ...prev,
    //         {
    //             id: Date.now().toString(),
    //             title: title,
    //             description:description,
    //             image:image
    //         }
    //     ])
    // };
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
                    </List>
                </Content>
            </Container>
        );

};