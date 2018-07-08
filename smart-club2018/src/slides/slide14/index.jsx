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
        <Image width={'100%'} src={require('./img.jpg')} key="title" />
    </div>
};

export default _Slide;
