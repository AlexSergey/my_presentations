import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    BlockQuote,
    Cite,
    Quote,
    List, ListItem
} from 'spectacle';

const _Slide = () => {
    return [
        <Heading size={5} caps lineHeight={1} textColor="secondary" key="heading">
            Зачем это?
        </Heading>,
        <Image src={require('./img.png')} key="img" />,
        <List key="list">
            <ListItem>Наша программа – живой организм. Баг – это болезнь</ListItem>
            <ListItem>Тестировщик не сможет сказать точно, что привело к багу</ListItem>
            <ListItem>Причино-следственная связь очень длинная и сложная</ListItem>
        </List>
    ]
};

export default _Slide;