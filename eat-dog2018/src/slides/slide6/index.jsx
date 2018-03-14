import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    BlockQuote,
    Cite,
    Quote
} from 'spectacle';

const _Slide = () => {
    return [
        <Image src={require('./img.jpg')} key="img" />
    ]
};

export default _Slide;