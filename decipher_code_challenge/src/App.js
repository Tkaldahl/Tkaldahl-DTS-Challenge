import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      episodes: null
    }
    this.resData = this.resData.bind(this)
  }
  resData () {
    axios.get('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080/')
      .then((res) => this.setState({episodes: res.data}), console.log(this.state.episodes))
      .catch((err) => {console.log(err)})
    }
  render() {
    return (
      <div className="App">
        <button onClick={this.resData}>Click Me!</button>
      </div>
    );
  }
}

export default App;
