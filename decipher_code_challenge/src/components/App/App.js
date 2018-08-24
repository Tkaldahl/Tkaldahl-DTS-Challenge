import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from '../Header/Header'
import SideNav from '../SideNav/SideNav'
import EpisodesList from '../EpisodesList/EpisodesList'
import EpisodeSeasonSearch from '../EpisodeSeasonSearch/EpisodeSeasonSearch'
import {Switch, Link, Route} from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      episodes: null
    }
    this.resData = this.resData.bind(this)
  }
  componentDidMount() {
    axios.get('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080/')
      .then((res) => this.setState({episodes: res.data}), console.log(this.state.episodes))
      .catch((err) => {console.log(err)})
  }
  resData () {
    console.log(this.state.episodes)
  }
  render() {
    return (
      <div className="AppContainer">
        {/* <header>
          <Header />
        </header> */}
        <nav>
          <SideNav />
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
