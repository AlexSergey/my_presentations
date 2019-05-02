import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    CodePane
} from 'spectacle';

const _Slide = () => {
    return <div>
        <Text margin="10px 0 0" textColor="secondary" size={1}>
            ... РАНО РАДОВАТЬСЯ ...
        </Text>
        <Text margin="20px 0 0" textColor="tertiary" size={1} textAlign="left">
            - QA нашли баги, что-то нужно добавить, что-то убрать
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Так как обмен CSV происходит по скайпу, нет возможности версионирования
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Получаем рассинхранизацию версий переводов
        </Text>
        <Text margin="10px 0 10px" textColor="tertiary" size={1} textAlign="left">
            - Так как обращение в компонентах к полю словаря идет через точку, если в версии перевода отсутствует поле, получим критический баг
        </Text>
        <CodePane theme='dark' lang="javascript" margin="40px 0 0" source={require('raw-loader!./code.example')} />
    </div>
};

export default _Slide;
