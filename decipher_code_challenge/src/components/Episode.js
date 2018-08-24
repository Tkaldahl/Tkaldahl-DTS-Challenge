import React, { Component } from 'react';

class Episode extends Component {
    render() {
        return (
            <h2>{this.props.episode.originalTitle}</h2>
        )
    }
}

export default Episode