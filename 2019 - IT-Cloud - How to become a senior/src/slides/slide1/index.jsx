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
            Сегодня мы поговорим на темы:
        </Heading>
        <Text>→ Нужен ли фреймворк?</Text>
        <Text>→ Архитектура</Text>
        <Text>→ Хороший код</Text>
        <Text>→ Паттерны проектирования</Text>
        <Text>→ Тестирование</Text>
        <Text>→ Работа в команде</Text>
        <Text>→ Прочие важные моменты</Text>
    </>
};

export default _Slide;
