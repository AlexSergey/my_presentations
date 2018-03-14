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
        <Heading size={5} textColor="secondary" key="title">
            Это хорошо... Но не супер. Сделаем, чтобы было супер!
        </Heading>
    ]
};

export default _Slide;