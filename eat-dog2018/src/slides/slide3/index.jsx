import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';

const _Slide = () => {
    return [
        <Image src={require('./img.jpg')} width={'75%'} key="img" />
    ]
};

export default _Slide;