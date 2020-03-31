import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Video extends Component {
    componentDidMount() {
        this.refs.video.play();
    }
    componentWillUnmount() {
        this.refs.video.pause();
    }

    render() {
        return (
            <div
                style={{
                    width: this.props.width ? (typeof this.props.width === 'string' && this.props.width.indexOf('%') > 0 ? this.props.width : `${this.props.width}px`) : '100%',
                    height: this.props.width ? 'auto' : '100%',
                    margin: this.props.center ? '0 auto' : (typeof this.props.margin === 'string' ? this.props.margin : '0'),
                    display: 'inline-block'
                }}
            >
                <video
                    ref="video"
                    style={{ objectFit: 'cover', width: '100%', display: 'block' }}
                    loop={this.props.loop}
                    muted={this.props.muted}
                    controls={this.props.controls}
                >
                    <source src={this.props.src} type={this.props.type} />
                </video>
            </div>
        );
    }
}
Video.defaultProps = {
    controls: false,
    muted: true,
    loop: false,
    type: 'video/mp4'
};
Video.propTypes = {
    controls: PropTypes.bool,
    margin: PropTypes.string,
    center: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};
