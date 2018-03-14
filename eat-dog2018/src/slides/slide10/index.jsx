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
            Логгер с методами:
        </Heading>,
        <CodePane theme='light' lang="javascript" source={require('raw-loader!./code.example')} key="code1" />,
        <Text size={6} textColor="secondary" key="text2">
            Готовое: winston (back), js-logger (front)
        </Text>,
        <Text size={6} textColor="secondary" key="text1">
            *Возможность подключить свою коллекцию для хранения стека
        </Text>
    ]
};

export default _Slide;