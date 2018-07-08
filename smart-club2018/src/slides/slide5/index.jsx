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
        <Text margin="10px 0 0" textColor="secondary" size={1}>
            Мы: "Давайте создадим велосипеды!"
        </Text>
        <Text margin="20px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Пишем конвертер JSON -> CSV
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Высылаем переводчику (по скайпу) CSV
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Получаем обновленный CSV
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Пишем конвертер CSV -> JSON
        </Text>
        <Text margin="20px 0 0" textColor="secondary" size={1}>
            Работает!!! Все довольны... Но!
        </Text>
    </div>
};

export default _Slide;
