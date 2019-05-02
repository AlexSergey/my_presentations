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
            Переводчик: "Идите нафиг со своим JSON"
        </Text>
        <Image width={'50%'} margin="20px auto 0" src={require('./img.jpg')} key="title" />
        <Text margin="20px 0 0" textColor="secondary" size={1}>
            "Нам нужен ТЕКСТ!"
        </Text>
    </div>
};

export default _Slide;
