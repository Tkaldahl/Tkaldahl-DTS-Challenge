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
        console.log(this.state.episodes.length)
        for (let i = 0; i < this.state.episodes.length; i++) {
            console.log(this.state.episodes[i])
            episodes.push(<Episode episode={this.state.episodes[i]} />)
        }
        console.log(episodes)
        return (
        <div className='episodeContainer'>
            {episodes}
        </div>
        )
    }
}

export default EpisodesList