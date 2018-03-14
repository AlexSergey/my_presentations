import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    List,
    ListItem
} from 'spectacle';

const _Slide = () => {
    return [
        <Heading size={6} fit caps lineHeight={1} textColor="secondary" key="head1">
            Не ошибками едиными...
        </Heading>,
        <List key="list">
            <ListItem>Мониторинг</ListItem>
            <ListItem>Сбор данных</ListItem>
            <ListItem>Анализ действий, дополняющий Google Analytics</ListItem>
            <ListItem>Проверка UX, понимание действий юзера</ListItem>
        </List>
    ]
};

export default _Slide;