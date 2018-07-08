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
        <Heading size={1} caps lineHeight={1} textColor="secondary" key="head1">
            i18n / l10n
        </Heading>
        <Text margin="10px 0 0" textColor="secondary" size={1}>
            Интернационализация - это набор технических приёмов, делающих возможной последующую локализацию:
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1}>
            - RTL
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1}>
            - Поддержка специальных средств ввода
        </Text>
        <Text margin="10px 0 0" textColor="secondary" size={1}>
            Локализация - адаптация приложения на уровне компонентов:
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1}>
            - Переводы текста
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1}>
            - Обработка дат, денежных едениц, цветовых палитр
        </Text>
    </div>
};

export default _Slide;
