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
            Нужен ли фреймверк?
        </Heading>
        <hr/>
        <Heading size={2} fit lineHeight={1} textColor="secondary" key="head2">
            Жизнь без фреймверка
        </Heading>
        <Text>→ HTML Components</Text>
        <Text>→ Сильная кастомизация</Text>
        <Text>→ В образовательных целях</Text>
    </>
};

export default _Slide;