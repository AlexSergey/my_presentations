import React from 'react';
import Video from '../../components/Video';
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
            Пример 1. Социалка.
        </Heading>,
        <Video width={200} src={require('./video.mp4')} loop={true} center={true} key="video" />,
        <List key="list">
            <ListItem>React</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Sockets</ListItem>
            <ListItem>Много запросов на сервер</ListItem>
            <ListItem>Роли юзеров и т.д.</ListItem>
        </List>
    ]
};

export default _Slide;