import React, {Component} from 'react'
import axios from 'axios'
import Episode from '../Episode/Episode'

class EpisodeSeasonSearch extends Component {
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
            console.log('the seasonnumber of the episode is ' + this.state.episodes[i].seasonNumber)
            console.log('the selected seasonNumber is ' + this.props.selectedSeason)
            if (this.state.episodes[i].seasonNumber == this.props.selectedSeason) {
                episodes.push(<Episode episode={this.state.episodes[i]} />)
            }
        }
        return (
            <div className="searchContainer">
                <h1>HelloWorld</h1>
                {episodes}
            </div>

        )
    }
}

export default EpisodeSeasonSearch