import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';

const _Slide = () => {
    return [
        <Image width={'50%'} src={require('./title.png')} key="title" />,
        <Heading size={1} fit caps lineHeight={1} textColor="secondary" key="head1">
            Тестирование через логирование
        </Heading>,
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit key="head2">
            Александров Сергей (npm/github: AlexSergey)
        </Text>
    ]
};

export default _Slide;