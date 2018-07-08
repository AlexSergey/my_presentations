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
            Gettext
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Существует с 90-ых годов
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - В качестве ID используются текст на английском, удобно если нет перевода - берем в качестве фолл бека английский вариант
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Поддержка git подобной merge системы
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Поддержка множественных форм в тексте
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} textAlign="left">
            - Спец редактор, с поддержкой контроля правописания, разными плагинами. Существует для всех операционных систем.
        </Text>
    </div>
};

export default _Slide;
