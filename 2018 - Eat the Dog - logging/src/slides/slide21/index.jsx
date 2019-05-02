import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    BlockQuote,
    Cite,
    Quote,
    List,
    ListItem,
    CodePane
} from 'spectacle';

const _Slide = () => {
    return [
        <Heading size={5} textColor="secondary" key="text1">
            Без Redux жизнь не заканчивается...
        </Heading>,
        <List key="list" textColor="tertiary">
            <ListItem>@ - декораторы</ListItem>
            <ListItem>Proxy</ListItem>
            <ListItem>Пишем осмысленный код</ListItem>
        </List>
    ]
};

export default _Slide;