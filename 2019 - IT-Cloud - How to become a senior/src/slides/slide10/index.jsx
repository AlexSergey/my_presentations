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
            Работа в команде
        </Heading>
        <Text>→ Будьте открытыми и приветливыми</Text>
        <Text>→ Обосновуйте свои идеи</Text>
        <Text>→ Если у вас проблема, сразу об этом говорите, каждый отложенный час может привести к большим затратам</Text>
        <Text>→ Заказчик всегда прав</Text>
        <Text>→ Будьте пунктуальны</Text>
        <Text>→ Не бойтесь делегировать задачи</Text>
    </>
};

export default _Slide;