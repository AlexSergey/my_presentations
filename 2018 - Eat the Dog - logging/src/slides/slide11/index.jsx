import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    BlockQuote,
    Cite,
    Quote,
    List,
    ListItem,
    CodePane
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

const _Slide = () => {
    return [
        <CodeSlide
            key="code"
            bgColor="secondary"
            transition={[]}
            lang="js"
            code={require("raw-loader!./code.example")}
            ranges={[
                { loc: [0, 270], title: "Коллекция с лимитом" },
                { loc: [0, 5], note: "Установим лимит" },
                { loc: [11, 15], note: "Проверяем превышение лимита" },
                { loc: [5, 11], note: "Проверка" },
            ]}/>,
    ]
};

export default _Slide;