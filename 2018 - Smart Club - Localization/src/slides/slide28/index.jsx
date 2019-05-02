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
        <Image src={require('./img.jpg')} key="img" />
        <Heading size={6} fit caps lineHeight={1} textColor="fifth" key="head1" margin="20px 0 0">
            ВСЕМ СПАСИБО!
            ВОПРОСЫ!
        </Heading>
    </div>
};

export default _Slide;
