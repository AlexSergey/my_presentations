import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';

const _Slide = () => {
    return [
        <Image src={require('./image.png')} key="title" />
    ]
};

export default _Slide;
