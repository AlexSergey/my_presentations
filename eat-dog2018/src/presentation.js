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
import Slide15 from './slides/slide15';
import Slide16 from './slides/slide16';
import Slide17 from './slides/slide17';
import Slide18 from './slides/slide18';
import Slide19 from './slides/slide19';
import Slide20 from './slides/slide20';
import Slide21 from './slides/slide21';
import Slide22 from './slides/slide22';
import Slide23 from './slides/slide23';
import Slide24 from './slides/slide24';
import Slide25 from './slides/slide25';
import Slide26 from './slides/slide26';
import Slide27 from './slides/slide27';
import Slide28 from './slides/slide28';
import Slide29 from './slides/slide29';
import Slide30 from './slides/slide30';
import Slide31 from './slides/slide31';
import Slide32 from './slides/slide32';
import Slide33 from './slides/slide33';

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
                <Slide transition={['slide']} bgColor="primary">
                    <Slide1 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide2 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide3 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide4 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide5 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide6 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide7 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide8 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide9 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide10 />
                </Slide>
                {Slide11()}
                <Slide transition={['slide']} bgColor="primary">
                    <Slide12 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide13 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide14 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide15 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide16 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide17 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide18 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide19 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide20 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide21 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide22 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide23 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide24 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide25 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide26 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide27 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide28 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide29 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide30 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide31 />
                </Slide>
                <Slide transition={['slide']} bgColor="primary">
                    <Slide32 />
                </Slide>
                <Slide transition={['slide']} bgColor="#f5f5f5">
                    <Slide33 />
                </Slide>
            </Deck>
        );
    }
}
