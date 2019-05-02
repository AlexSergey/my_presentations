import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';

const _Slide = () => {
    return <div>
        <Image width={'35%'} src={require('./img.png')} key="title" />
        <Heading size={1} fit caps lineHeight={1} textColor="secondary" key="head1">
            Статей много, толку мало
        </Heading>
    </div>
};

export default _Slide;
