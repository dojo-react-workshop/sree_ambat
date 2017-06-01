import React, { Component } from 'react';
import Counter from './Counter'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counters:[<Counter data={1}/>]
    }
  }

  addCounter = ()=>{
    var key = this.state.counters.length+1
    this.setState({counters:this.state.counters.concat([<Counter data={key}/>])})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">+</div>
          <h2>Counter</h2>
        </div>
        <div className="container">
          {this.state.counters}
        </div>
      <button onClick={()=>this.addCounter()}>Add Counter</button>
      </div>

    );
  }
}

export default App;
