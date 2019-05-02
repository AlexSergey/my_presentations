import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    List,
    ListItem
} from 'spectacle';
import Video from '../../components/Video';

const _Slide = () => {
    return [
        <Heading size={5} textColor="secondary" key="title">
            Выводы
        </Heading>,
        <Video src={require('./video.mp4')} width={'25%'} center loop={true} key="video" />,
        <List key="list">
            <ListItem>Будьте ответственными за свое приложение</ListItem>
            <ListItem>Не бросайте его</ListItem>
            <ListItem>Следите за логами и улучшайте ваше приложение</ListItem>
        </List>

    ]
};

export default _Slide;