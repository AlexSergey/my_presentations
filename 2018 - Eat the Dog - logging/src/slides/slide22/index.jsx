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
            Ошибка по требованию
        </Heading>,
        <Image src={require('./img.jpg')} key="img" />
    ]
};

export default _Slide;