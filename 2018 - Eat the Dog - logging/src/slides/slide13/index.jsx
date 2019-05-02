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
            Redux middleware
        </Heading>,
        <CodePane lang="javascript" source={require('raw-loader!./code.example')} key="code1" />,
        <Text size={6} textColor="secondary" key="text2">
            префикс redux дает понять, что данный лог относится к Redux слою приложения
        </Text>
    ]
};

export default _Slide;