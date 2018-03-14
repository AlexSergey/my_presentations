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
            При тестировании, блокируем интерфейс, если произошел баг!
        </Heading>,
        <CodePane lang="javascript" source={require('raw-loader!./code.example')} key="code1" />
    ]
};

export default _Slide;