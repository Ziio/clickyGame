import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Clicky Game</h1>
        <div className="cardWindow">
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
