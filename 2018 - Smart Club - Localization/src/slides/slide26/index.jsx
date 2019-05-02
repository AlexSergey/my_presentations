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
        <Heading size={1} fit caps lineHeight={1} textColor="secondary" key="head1">
            Не забываем про:
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Даты
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Денежные форматы
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Цвета, позиции элементов
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Прочие национальные особенности
        </Text>
    </div>
};

export default _Slide;
