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
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Сделал рутовый компонент, пробросил в props дочерним компонентам объект локализации
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Нафигачил JSON с английским и русским вариантом локализации
        </Text>
        <CodePane theme='dark' lang="javascript" source={require('raw-loader!./code2.example')} />
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Проставил в дочерних компонентах отображение нужного поля
        </Text>
        <CodePane theme='dark' lang="javascript" source={require('raw-loader!./code.example')} />
        <Text margin="10px 0 0" textColor="secondary" size={1}>
            Работает!!! Все довольны... Но!
        </Text>
    </div>
};

export default _Slide;
