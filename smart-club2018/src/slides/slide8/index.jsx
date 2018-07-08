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
            Вроде как сработало... НО!
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - У переводчика нет возможности пользоваться средствами правописания, неудобно работать
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Мы потратили кучу человеко-часов на написание этого ненужного механизма, еще теперь надо его поддерживать
        </Text>
    </div>
};

export default _Slide;
