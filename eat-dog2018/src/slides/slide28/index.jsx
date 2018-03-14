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
    CodePane,
    Table,
    TableHeader,
    TableRow,
    TableHeaderItem,
    TableBody,
    TableItem
} from 'spectacle';

const _Slide = () => {
    return [
        <Heading size={5} textColor="secondary" key="title">
            Что мы получили?
        </Heading>,
        <Table key="table">
            <TableBody>
                <TableRow>
                    <TableItem>
                        <List>
                            <ListItem>Сохраняем все действия, которые предшествовали ошибки + метаданные</ListItem>
                            <ListItem>Линкуем сессию с frontend к backend</ListItem>
                            <ListItem>Блокируем интерфейс если у тестировщика произошла ошибка</ListItem>
                            <ListItem>Ошибка по требованию</ListItem>
                        </List>
                    </TableItem>
                    <TableItem>
                        <Image src={require('./img.jpg')} key="img" />
                    </TableItem>
                </TableRow>
            </TableBody>
        </Table>,
        <Text size={6} textColor="tertiary" key="text2">
            PS, Используйте сбор логов на продакшене, юзеры - лучшие тестировщики!
        </Text>
    ]
};

export default _Slide;