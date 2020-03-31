import React from 'react';
import Video from '../Video';
import PropTypes from "prop-types";
import './font.scss';

export default class Index extends Video {
    constructor(props) {
        super(props);

        this.state = {
            time: 0
        };
    }
    updateCountdown = () => {
        const time = this.props.inverse ?
            parseInt(this.refs.video.duration - this.refs.video.currentTime, 10) :
            parseInt(this.refs.video.currentTime, 10);

        this.setState({ time });
    }

    componentDidMount() {
        super.componentDidMount();
        this.refs.video.addEventListener('timeupdate', this.updateCountdown);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.refs.video.removeEventListener('timeupdate', this.updateCountdown);
    }

    render() {
        return (
            <div
                style={{
                    width: this.props.width ? (typeof this.props.width === 'string' && this.props.width.indexOf('%') > 0 ? this.props.width : `${this.props.width}px`) : '100%',
                    height: this.props.width ? 'auto' : '100%',
                    margin: this.props.center ? '0 auto' : (typeof this.props.margin === 'string' ? this.props.margin : '0'),
                    position: 'relative',
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
                {typeof this.state.time === 'number' ? (
                    <div style={{
                        fontFamily: 'VT323',
                        position: 'absolute',
                        bottom: '25px',
                        textAlign: 'center',
                        left: 0,
                        width: '100%',
                        fontSize: '32px'
                    }}>
                        <div style={{
                            background: 'white',
                            boxShadow: '0 2px 4px 0 rgba(57, 57, 78, 0.09)',
                            padding: '5px 10px',
                            display: 'inline-block',
                            border: '1px solid #eee',
                            borderRadius: '4px'
                        }}>{this.state.time}</div>
                    </div>
                ) : null}
            </div>
        );
    }
}
Index.defaultProps = {
    inverse: false,
    controls: false,
    muted: true,
    loop: false,
    type: 'video/mp4'
};
Index.propTypes = {
    inverse: PropTypes.bool,
    margin: PropTypes.string,
    center: PropTypes.bool,
    controls: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};