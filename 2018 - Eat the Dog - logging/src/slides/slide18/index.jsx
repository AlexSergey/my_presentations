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
        <Table key="list">
            <TableBody>
                <TableRow>
                    <TableItem>
                        <List>
                            <ListItem>Сохраняем все действия, которые предшествовали ошибки + метаданные</ListItem>
                            <ListItem>Во время, когда ошибка произошла, отправляем данные на Elastic</ListItem>
                            <ListItem>Тестер находит ошибку, заводит баг, прикрепляет к тикету ID с ошибкой</ListItem>
                            <ListItem>Смотрим в кибану, находим ошибку, смотрим действия</ListItem>
                            <ListItem>Фиксим, пьем кофе;)</ListItem>
                        </List>
                    </TableItem>
                    <TableItem>
                        <Image src={require('./img.png')} key="img" />
                    </TableItem>
                </TableRow>
            </TableBody>
        </Table>
    ]
};

export default _Slide;