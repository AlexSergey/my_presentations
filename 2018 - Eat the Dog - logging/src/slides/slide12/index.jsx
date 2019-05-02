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
            Также мы можем добавить в стек:
        </Heading>,
        <CodePane lang="javascript" source={require('raw-loader!./code.example')} key="code1" />,
        <Text size={6} textColor="secondary" key="text2">
            UserID - важен, по нему мы будем понимать у кого из тестировщиков произошел баг
        </Text>
    ]
};

export default _Slide;