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
            Хороший код
        </Heading>
        <Text>→ Чем проще, тем лучше</Text>
        <Text>→ Код должен читаться как книга</Text>
        <Text>→ Именование переменных, длина функций, 1 функция === 1 действие</Text>
        <Text>→ Рефакторите</Text>
        <Text>→ Декомпозируйте, будьте осторожны с наследованием</Text>
        <Text><strong>Не пытайтесь достичь идеального кода, это очень затратно! Лучшее — враг хорошего.</strong></Text>
    </>
};

export default _Slide;