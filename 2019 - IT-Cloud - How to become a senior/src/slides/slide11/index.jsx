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
            Эстимейты
        </Heading>
        <Text>→ Если я знаю, как выполнить эту задачу - x1.5</Text>
        <Text>→ Если я НЕ знаю, как выполнить эту задачу - x3</Text>
        <Text>→ Если задачу выполняю не я, но все понятно - x2</Text>
        <Text>→ Если задачу блокируют другие задачи, то нельзя дать эстимейт</Text>
        <Text>→ Эстимейт тех.дира Яндекс - пол окружности + 2 недели!</Text>
        <Text><strong>! Лучше сделать раньше и быть красавчиком, чем сделать позже и получить по шапке.</strong></Text>
    </>
};

export default _Slide;