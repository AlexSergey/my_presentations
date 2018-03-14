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
            Связь сессии frontend с backend
        </Heading>,
        <CodePane lang="javascript" source={require('raw-loader!./code.example')} key="code1" />,
        <Text size={6} textColor="secondary" key="text2">
            Ставим SessionID во все заголовки
        </Text>
    ]
};

export default _Slide;