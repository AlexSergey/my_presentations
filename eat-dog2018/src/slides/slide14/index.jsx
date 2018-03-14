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
            Axios
        </Heading>,
        <CodePane lang="javascript" source={require('raw-loader!./code.example')} key="code1" />
    ]
};

export default _Slide;