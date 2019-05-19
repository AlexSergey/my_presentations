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
            Паттерны
        </Heading>
        <Text>→ Модуль</Text>
        <Text>→ Синглтон</Text>
        <Text>→ Медиатор</Text>
        <Text style={{textDecoration: 'line-through'}}>→ Книга: "Банда 4-х"</Text>
    </>
};

export default _Slide;