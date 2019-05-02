import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    CodePane
} from 'spectacle';

const _Slide = () => {
    return <div>
        <Heading size={1} caps lineHeight={1} textColor="secondary" key="head1">
            Оптимизация
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Кеширование в локал сторедж части локализации
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Включать язык по умолчанию в бандл
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Остальные языки хранить на сервере
        </Text>
    </div>
};

export default _Slide;
