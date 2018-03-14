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
    ListItem
} from 'spectacle';

const _Slide = () => {
    return [
        <Heading size={5} textColor="secondary" key="title">
            Что мы должны сделать:
        </Heading>,
        <List key="list">
            <ListItem>Подобрать логгер (js-logger/winston)</ListItem>
            <ListItem>Создать класс для хранения действий пользователя, предшествующих ошибке</ListItem>
            <ListItem>Логирование взаимодействий с бекендом</ListItem>
            <ListItem>Логирование сокет соединения</ListItem>
            <ListItem>Отправка данных на Elastic</ListItem>
        </List>
    ]
};

export default _Slide;