import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';

const _Slide = () => {
    return [
        <Heading size={5} textColor="secondary" key="text1">
            Что видит тестер + ID сессии
        </Heading>,
        <Image src={require('./img.png')} key="img" />
    ]
};

export default _Slide;