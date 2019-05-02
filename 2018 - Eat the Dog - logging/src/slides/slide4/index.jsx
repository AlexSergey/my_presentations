import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    List, ListItem
} from 'spectacle';

const _Slide = () => {
    return [
        <Image src={require('./img.png')} key="img" />,
        <Text margin="10px 0 0" textColor="tertiary" size={5} fit key="text">
            Никто лучше самой программы не расскажет, что у неё болит
        </Text>,
        <Heading size={5} caps lineHeight={1} textColor="secondary" key="heading">
            Что нам для этого нужно?
        </Heading>,
        <List key="list">
            <ListItem>ElasticStack</ListItem>
            <ListItem>Немного JS кода</ListItem>
        </List>
    ]
};

export default _Slide;