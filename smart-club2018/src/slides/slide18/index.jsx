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
        <Heading size={5} textColor="secondary" key="title">
            Для вашего фреймверка нужно создать 2 компонента
        </Heading>
        <CodePane theme='dark' lang="javascript" source={`<Localization></Localization>`} />
        <CodePane theme='dark' lang="javascript" source={`<RootComponent></RootComponent>`} />
    </div>
};

export default _Slide;
