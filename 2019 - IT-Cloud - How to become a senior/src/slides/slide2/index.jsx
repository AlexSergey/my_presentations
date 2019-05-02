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
            Что нам дает фреймверк?
        </Heading>
        <Text>+ Легкость поддержки и развития продукта</Text>
        <Text>+ Готовые решения</Text>
        <Text>+ Сообщество</Text>
        <Text>- Сложность кастомизации</Text>
    </>
};

export default _Slide;
