import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import SideNav from './components/SideNav'
import EpisodesList from './components/EpisodesList'

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
        <header>
          <Header />
        </header>
        <nav>
          <SideNav />
        </nav>
        <main>
          <EpisodesList />
        </main>
      </div>
    );
  }
}

export default App;
