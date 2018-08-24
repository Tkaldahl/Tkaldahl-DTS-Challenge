import React, {Component} from 'react'
import axios from 'axios'
import Episode from '../Episode/Episode'

class EpisodeSeasonSearch extends Component {
    constructor () {
        super()
        this.state = {
            episodes: [],
            sortCriteria: 'originalTitle'
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
            if (this.state.episodes[i].seasonNumber == this.props.selectedSeason) {
                episodes.push(<Episode episode={this.state.episodes[i]} />)
            }
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
            <div className="searchContainer">
                {episodes}
            </div>

        )
    }
}

export default EpisodeSeasonSearch