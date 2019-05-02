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
            Архитектура
        </Heading>
        <Text>→ Архитектура должна быть ГИБКОЙ!</Text>
        <Text>→ Архитектура должна давать вносить любые изменения</Text>
        <Text>→ Построение хорошей архитектуры приходит только с опытом</Text>
        <Text>→ Хорошая архитектура === хороший код!</Text>
    </>
};

export default _Slide;