import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    BlockQuote,
    Cite,
    Quote,
    List, ListItem,
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
            ElasticStack
        </Heading>,
        <Image src={require('./img.png')} key="img" />,
        <Table key="table">
            <TableBody>
                <TableRow>
                    <TableItem>
                        <List key="list">
                            <ListItem>ElasticSearch - База данных</ListItem>
                            <ListItem>Logstash - синхронизатор</ListItem>
                            <ListItem>Kibana - веб интерфейс</ListItem>
                        </List>
                    </TableItem>
                    <TableItem>
                        <List key="list">
                            <ListItem>Бесплатность</ListItem>
                            <ListItem>Простота</ListItem>
                            <ListItem>Гибкая настройка</ListItem>
                        </List>
                    </TableItem>
                </TableRow>
            </TableBody>
        </Table>
    ]
};

export default _Slide;