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
      selectedSeason: null,
      redirect: false,
      sortCriteria: null,
    }
    this.updateSeason = this.updateSeason.bind(this)
    this.sortFunction = this.sortFunction.bind(this)
  }
  
  updateSeason (e) {
    e.preventDefault()
    this.setState({
      selectedSeason: e.target.dataset.id,
    })
    this.setState({
      redirect: true
    })
  }
  sortFunction (e) {
    e.preventDefault()
    this.setState({
      sortCriteria: e.target.dataset.id
    })
    console.log(this.state.sortCriteria)
  }
 
  render() {
    return (
      <div className="AppContainer">
        <nav>
          <SideNav 
            updateSeason={this.updateSeason}
            sortFunction={this.sortFunction}
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
                return <EpisodesList
                  sortCriteria={this.state.sortCriteria}
                />}
              }
            />
            <Route
              path='/season/:id'
              exact
              render={() =>{
                return <EpisodeSeasonSearch
                  selectedSeason={this.state.selectedSeason}
                  sortCriteria={this.state.sortCriteria}
                />
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
