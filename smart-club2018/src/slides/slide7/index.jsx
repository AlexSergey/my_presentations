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
            Мы: "Ну давайте еще велосипедов напишем" :(
        </Text>
        <Image width={'100%'} margin="20px auto 0" src={require('./img.jpg')} key="title" />
    </div>
};

export default _Slide;
