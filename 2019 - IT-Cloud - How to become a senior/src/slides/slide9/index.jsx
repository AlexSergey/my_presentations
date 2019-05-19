import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';

const _Slide = () => {
    return <>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary" key="head1">
            Саморазвитие
        </Heading>
        <Text>→ Конспект</Text>
        <Image width={'50%'} src={require('./img.jpg')} key="title" />
        <Text>→ github</Text>
        <Text>→ Домашние проекты</Text>
    </>
};

export default _Slide;