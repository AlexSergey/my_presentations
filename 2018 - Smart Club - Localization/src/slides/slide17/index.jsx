import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    CodePane,
    List,
    ListItem
} from 'spectacle';

const _Slide = () => {
    return <div>
        <Heading size={5} textColor="secondary" key="title">
            1. Выбор библиотеки
        </Heading>
        <Text margin="20px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Берем библиотеку поддерживающаю формат gettext (Jed, po.js)
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Библиотека не должна иметь привязки к фреймверку
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Библиотека должна иметь методы для работы с текстом
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1}>
            l - перевод обычного текста
        </Text>
        <CodePane theme='dark' lang="javascript" source={`l('Hello world')`} />
        <Text margin="10px 0 0" textColor="tertiary" size={1}>
            nl - множественная форма
        </Text>
        <CodePane theme='dark' lang="javascript" source={`nl('Remove %d object', 'Remove %d objects', objectsCount)`} />
    </div>
};

export default _Slide;
