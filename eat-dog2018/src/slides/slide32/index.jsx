import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    Table,
    Link,
    TableHeader,
    TableRow,
    TableHeaderItem,
    TableBody,
    TableItem
} from 'spectacle';

const _Slide = () => {
    return [
        <Table key="table">
            <TableBody>
                <TableRow>
                    <TableItem>
                        <Image src={require('./img.jpg')} key="img" />
                    </TableItem>
                    <TableItem>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableItem>
                                        <Heading size={5} textColor="secondary" key="title">
                                            ПРИМЕРЫ И ССЫЛКИ
                                        </Heading>
                                        <Text>
                                            <Link href="https://github.com/AlexSergey/eat-dog2018">https://github.com/AlexSergey/eat-dog2018</Link>
                                        </Text>
                                        <Text>
                                            <Link href="https://github.com/AlexSergey/my_presentations">Presentation</Link>
                                        </Text>
                                    </TableItem>
                                </TableRow>
                                <TableRow>
                                    <TableItem>
                                        <Heading size={5} textColor="secondary" key="title">
                                            Чат "Съесть собаку"
                                        </Heading>
                                        <Link href="https://join.skype.com/Ct9eTgsIFHfk">https://join.skype.com/Ct9eTgsIFHfk</Link>
                                    </TableItem>
                                </TableRow>
                                <TableRow>
                                    <TableItem>
                                        <Heading size={5} textColor="secondary" key="title">
                                            КОНТАКТЫ
                                        </Heading>
                                        <Text>
                                            <Link href="https://github.com/AlexSergey">Github: AlexSergey</Link>
                                        </Text>
                                        <Text>
                                            <Link href="https://www.linkedin.com/in/alex-sergey/">LinkedIn</Link>
                                        </Text>
                                    </TableItem>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableItem>
                </TableRow>
            </TableBody>
        </Table>,
        <Heading size={6} fit caps lineHeight={1} textColor="fifth" key="head1">
            ВСЕМ СПАСИБО!
            ВОПРОСЫ!
        </Heading>
    ]
};

export default _Slide;