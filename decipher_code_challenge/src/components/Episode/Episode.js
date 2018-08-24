import React, { Component } from 'react';
import RatingsBadge from '../RatingsBadge/RatingsBadge'
import './Episode.css'

class Episode extends Component {
    render() {
        return (
            <div className="episodeDetail">
                <h2>{this.props.episode.originalTitle}</h2>
                <h4>Premiered Season {this.props.episode.seasonNumber}, Episode {this.props.episode.episodeNumber}</h4>
                <RatingsBadge {...this.props} />
            </div>
        )
    }
}

export default Episode