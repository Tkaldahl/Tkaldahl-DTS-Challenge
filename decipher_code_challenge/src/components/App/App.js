import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SideNav from '../SideNav/SideNav'
import EpisodesList from '../EpisodesList/EpisodesList'
import EpisodeSeasonSearch from '../EpisodeSeasonSearch/EpisodeSeasonSearch'
import {Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      episodes: null,
      selectedSeason: null,
      redirect: false,
    }
    this.updateSeason = this.updateSeason.bind(this)
  }
  componentDidMount() {
    axios.get('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080/')
      .then((res) => this.setState({episodes: res.data}))
      .catch((err) => {console.log(err)})
  }
  updateSeason (e) {
    e.preventDefault()
    this.setState({
      selectedSeason: e.target.dataset.id,
      redirect: true
    })
  }
  render() {
    return (
      <div className="AppContainer">
        <nav>
          <SideNav 
            updateSeason={this.updateSeason}
            redirect={this.state.redirect}
            selectedSeason={this.state.selectedSeason}
          />
        </nav>
        <main>
          <Switch>
            <Route
              path='/'
              exact
              render={() => {
                return <EpisodesList />}
              }
            />
            <Route
              path='/season/:id'
              exact
              render={() =>{
                return <EpisodeSeasonSearch />
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
