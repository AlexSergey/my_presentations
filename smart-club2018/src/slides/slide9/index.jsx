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
        <Image width={'25%'} src={require('./img.png')} key="title" />
    </div>
};

export default _Slide;
