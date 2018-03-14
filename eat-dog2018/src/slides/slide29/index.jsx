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
        <Table key="table">
            <TableHeader>
                <TableRow>
                    <TableHeaderItem>
                        <Image src={require('./1.png')} key="img" />
                    </TableHeaderItem>
                    <TableHeaderItem>
                        <Image src={require('./2.png')} key="img" />
                    </TableHeaderItem>
                    <TableHeaderItem>
                        <Image src={require('./3.png')} key="img" />
                    </TableHeaderItem>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableItem>50-150$</TableItem>
                    <TableHeaderItem></TableHeaderItem>
                    <TableItem>29-200$</TableItem>
                </TableRow>
                <TableRow>
                    <TableItem>500k</TableItem>
                    <TableHeaderItem></TableHeaderItem>
                    <TableItem>1m</TableItem>
                </TableRow>
                <TableRow>
                    <TableItem>Настраиваемость</TableItem>
                    <TableHeaderItem></TableHeaderItem>
                    <TableItem>Простота</TableItem>
                </TableRow>
            </TableBody>
        </Table>
    ]
};

export default _Slide;