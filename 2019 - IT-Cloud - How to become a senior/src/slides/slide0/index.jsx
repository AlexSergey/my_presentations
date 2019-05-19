import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';
import { Logo } from './logo';

const _Slide = () => {
    return <>
        <div style={{width: '50%', margin: '0 auto 25px'}}>
            <Logo />
        </div>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Путь "Сеньор`а"
        </Heading>
        <Text margin="25px 0 0" textColor="tertiary" size={7}>
            Александров Сергей (github: AlexSergey)
        </Text>
        <Text margin="25px 0 0" textColor="secondary" size={5}>
            Co-Founder, CTO at <strong>Cleverbrush</strong>
        </Text>
        <Text margin="25px 0 0" textColor="secondary" size={5}>
            <em>JS, Nodejs, Python, PHP...</em>
        </Text>
    </>
};

export default _Slide;
