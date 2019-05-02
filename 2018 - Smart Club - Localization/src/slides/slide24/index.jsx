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
            - Отдаем переводчику POT файл (файл исходного языка, созданного из словарика)
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Получаем перевод в PO файле
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Вмерживаем переведенный текст
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Генерируем JSON для приложения (модуль - po2json)
        </Text>
    </div>
};

export default _Slide;
