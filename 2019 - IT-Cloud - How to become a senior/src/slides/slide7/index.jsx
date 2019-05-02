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
            Тестировщик – наш лучший друг!
        </Heading>
        <Text style={{textDecoration: 'line-through'}}>→ Выкинь свой компьютер, у меня работает!</Text>
        <Text>→ Докапывайтесь до сути, всему есть объяснение</Text>
        <Text>→ Простой, модульный код, проще покрывать тестами</Text>
        <Text>→ Покрывайте тестами только публичные методы</Text>
        <hr/>
        <Text><strong>! Знайте, что даже на 100% покрытая тестами программа может давать сбой, или вообще не работать. Все что вы сделали обязательно проверяйте лично, в разных условиях.</strong></Text>
    </>
};

export default _Slide;