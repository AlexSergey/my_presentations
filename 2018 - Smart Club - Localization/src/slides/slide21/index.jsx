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
        <CodePane theme='dark' lang="javascript" source={codeExample1} />
    </div>
};

export default _Slide;
