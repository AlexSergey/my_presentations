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
        <Text>→ Чем проще код, тем лучше</Text>
        <Text>→ Код должен читаться как книга</Text>
        <Text>→ Рефакторите</Text>
        <Text>→ Декомпозируйте код, и будьте осторожны с наследованием</Text>
    </>
};

export default _Slide;