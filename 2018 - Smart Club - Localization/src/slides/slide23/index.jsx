import React from 'react';
import {
    Image,
    Heading,
    Slide,
    Text,
    CodePane
} from 'spectacle';
import codeExample1 from 'raw-loader!./code.example';

const _Slide = () => {
    return <div>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Подключаем Babylon, парсим наш код
        </Text>
        <CodePane theme='dark' margin="10px 0 0" lang="javascript" source={codeExample1} />
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Извлекаем аргументы функций l / nl, которые идут в выбранной вами библиотеки
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Сохраняем аргументы как текст
        </Text>
    </div>
};

export default _Slide;
