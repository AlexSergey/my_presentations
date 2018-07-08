import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    CodePane
} from 'spectacle';

const _Slide = () => {
    return <div>
        <Text margin="10px 0 0" textColor="secondary" size={1}>
            Заказчик: "А давайте добавим еще 1 язык!"
        </Text>
        <Image width={'50%'} margin="20px auto 0" src={require('./img.jpg')} key="title" />
    </div>
};

export default _Slide;
