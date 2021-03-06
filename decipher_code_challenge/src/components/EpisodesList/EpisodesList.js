import React, { Component } from 'react';
import Episode from '../Episode/Episode'
import axios from 'axios'

class EpisodesList extends Component {
    constructor () {
        super()
        this.state = {
            episodes: [],
        }
    }
    componentDidMount() {
        axios.get('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080/')
            .then((res) => {
                this.setState({
                    episodes: res.data,
                })
            })
            .catch((err) => {console.log(err)})
    }
    
    render() {
        let episodes = []
        for (let i = 0; i < this.state.episodes.length; i++) {
            episodes.push(<Episode episode={this.state.episodes[i]} />)
        }
        let sortKey = this.props.sortCriteria
        function compare(a,b) {
            let aValue = a.props.episode[sortKey]
            let bValue = b.props.episode[sortKey]
            if (aValue < bValue) {
                return -1;
            } else if (aValue > bValue) {
                return 1;
            } else return 0;
          }
          
        episodes.sort(compare);
        return (
        <div className='episodeContainer'>
            {episodes}
        </div>
        )
    }
}

export default EpisodesList