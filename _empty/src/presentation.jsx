import React, { Component } from 'react';
//Setup
import {
    Deck,
    Slide
} from 'spectacle';
import { mergeTheme } from 'spectacle/lib/theme';
import './assets/styles.scss';
import 'prismjs';
import 'prism-theme-one-dark/prism-onedark.css';
import 'normalize.css';

const theme = mergeTheme({
    primary: "rgba(255, 255, 255, 0)",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    fifth: "#D64811"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

// Slides
import Slide0 from './slides/slide0';

export default class Presentation extends Component {
    render() {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
                progress="bar"
            >
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide0 />
                </Slide>
            </Deck>
        );
    }
}
