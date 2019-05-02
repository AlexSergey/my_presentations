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

const _Slide = () => {
    return [
        <Heading size={5} textColor="secondary" key="title">
            Также не забываем, что:
        </Heading>,
        <List key="list">
            <ListItem>Используйте понятные сообщения</ListItem>
            <ListItem>Дробите сложные алгоритмы разбавляя их логами</ListItem>
            <ListItem>Не допускайте избыточность логов</ListItem>
            <ListItem>Логируйте компоненты и особенно ошибки</ListItem>
        </List>,
        <CodePane lang="javascript" source={require('raw-loader!./code.example')} key="code1" />
    ]
};

export default _Slide;