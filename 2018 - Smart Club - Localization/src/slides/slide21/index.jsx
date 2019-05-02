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
        <CodePane theme='dark' lang="javascript" source={require('raw-loader!./code.example')} />
    </div>
};

export default _Slide;
