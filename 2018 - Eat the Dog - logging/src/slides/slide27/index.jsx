import React from 'react';
import Video from '../../components/Video';

const _Slide = () => {
    return [
        <Video src={require('./video.mp4')} loop={true} key="video" />
    ]
};

export default _Slide;