import React, { Component } from 'react';
import Tic from './Tic';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      nextToken:'X'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>X-O-X</h2>
        </div>
        <Tic next={this.state.nextToken}/>
      </div>
    );
  }
}

export default App;
