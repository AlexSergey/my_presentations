import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
} from 'spectacle';
import { Logo } from './logo';

const _Slide = () => {
    return <div>
        <div style={{width: '50%', margin: '0 auto 25px'}}>
            <Logo />
        </div>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary" key="head1">
            Локализация приложений без костылей
        </Heading>
        <Text margin="25px 0 0" textColor="tertiary" size={7} key="head2">
            Александров Сергей (github: AlexSergey)
        </Text>
    </div>
};

export default _Slide;
