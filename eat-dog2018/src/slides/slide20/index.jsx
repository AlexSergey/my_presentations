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
        <Image src={require('./logo.png')} key="img" />,
        <Heading size={5} textColor="secondary" key="text1">
            cleverbrush.com
        </Heading>,
        <List key="list">
            <ListItem>2 продукта: Editor, Collage</ListItem>
            <ListItem>итерация 1 - июнь, 2017 - 7 марта 2018</ListItem>
            <ListItem>JS/Node/C++</ListItem>
            <ListItem>51613 строк кода без node_modules</ListItem>
            <ListItem>734 файла</ListItem>
            <ListItem>2 разработчика, 2 дизайнера, 1 тестировщик, 1 верстальщик</ListItem>
            <ListItem>Разработка по фану, бесплатное ПО</ListItem>
        </List>
    ]
};

export default _Slide;
