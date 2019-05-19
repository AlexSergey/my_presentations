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
            Не зазнавайтесь!
        </Heading>
        <Text>→ Если Вам дали должность "сеньор", это еще не значит, что Вы есть Senior</Text>
        <Text>→ Всегда есть к чему расти и к чему стремиться. Не останавливайтесь на достигнутом!</Text>
        <Text><strong>Опыт опыту рознь: Бывает опыт 5 лет, а бывает опыт 1 год, повторенный 5 раз.</strong></Text>
    </>
};

export default _Slide;