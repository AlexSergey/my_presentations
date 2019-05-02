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
            Для переводчика:
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Подготовить описание приложения
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Дать доступ к стейджингу, или собрать билд
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Предоставить скриншоты
        </Text>
    </div>
};

export default _Slide;
