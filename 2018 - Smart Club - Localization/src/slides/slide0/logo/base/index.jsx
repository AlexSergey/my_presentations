import React, { Component } from 'react';

export default class FullBase extends Component {
    render() {
        let width = this.props && this.props.width ? `${this.props.width}px` : '100%';
        let height = this.props && this.props.height ? `${this.props.height}px` : '100%';
        let svg = this.props && this.props.svg ? this.props.svg : '';

        return (
            <i
                dangerouslySetInnerHTML={{ __html: svg }}
                style={{ width, height, display: 'inline-block' }}
            />
        );
    }
}
