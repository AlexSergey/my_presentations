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
        <Heading size={6} textColor="secondary" key="title">
            Localization component
        </Heading>
        <CodePane theme='dark' lang="javascript" source={require('raw-loader!./code.example')} />
    </div>
};

export default _Slide;
