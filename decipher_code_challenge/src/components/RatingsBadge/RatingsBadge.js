import React, {Component} from 'react'
import './RatingsBadge.css'

class RatingsBadge extends Component {
    render () {
        return (
            <div className="ratingsBadgeContainer">
                <h4>Average Rating: {this.props.episode.averageRating}</h4>
                <h6>With {this.props.episode.numVotes} Votes</h6>
                {/* <img src="https://vignette.wikia.nocookie.net/memoryalpha/images/5/57/TNG_badge.svg/revision/latest?cb=20160812024724&path-prefix=en" alt="Star Trek Badge" width=""/> */}
            </div>
        )
    }
}

export default RatingsBadge