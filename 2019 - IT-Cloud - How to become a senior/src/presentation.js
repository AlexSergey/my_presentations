import React, { Component } from 'react';
//Setup
import {
    Deck,
    Slide
} from 'spectacle';
import createTheme from "spectacle/lib/themes/default";
import './assets/styles.scss';
import 'prismjs';
import 'prism-theme-one-dark/prism-onedark.css';
import 'normalize.css';
const theme = createTheme({
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
import Slide1 from './slides/slide1';
import Slide2 from './slides/slide2';
import Slide3 from './slides/slide3';
import Slide4 from './slides/slide4';
import Slide5 from './slides/slide5';
import Slide6 from './slides/slide6';
import Slide7 from './slides/slide7';
import Slide8 from './slides/slide8';
import Slide9 from './slides/slide9';
import Slide10 from './slides/slide10';
import Slide11 from './slides/slide11';
import Slide12 from './slides/slide12';
import Slide13 from './slides/slide13';
import Slide14 from './slides/slide14';

export default class Presentation extends Component {
    render() {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
                progress="bar"
            >
                <Slide transition={['slide']} bgColor="#f5f5f5" className="the-first">
                    <Slide0 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide1 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide2 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide3 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide4 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide5 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide6 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide7 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide8 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide9 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide10 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide11 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide12 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide13 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide14 />
                </Slide>
            </Deck>
        );
    }
}
