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
            Выбор фреймверка
        </Heading>
        <Text>→ Смотрим на комьюнити</Text>
        <Text>→ Кто стоит за фреймверком?</Text>
        <Text>→ Сложность, порог вхождения</Text>
        <Image width={'100%'} src={require('./img.png')} key="title" />
    </>
};

export default _Slide;
