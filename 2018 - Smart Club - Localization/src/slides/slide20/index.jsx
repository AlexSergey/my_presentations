import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    CodePane
} from 'spectacle';
import codeExample1 from 'raw-loader!./code.example';

const _Slide = () => {
    return <div>
        <Heading size={6} textColor="secondary" key="title">
            Localization component
        </Heading>
        <CodePane theme='dark' lang="javascript" source={codeExample1} />
    </div>
};

export default _Slide;
