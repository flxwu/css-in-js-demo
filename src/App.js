import React, { Component } from 'react';
import logo from './css-in-js.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CSS in JS Demo</h1>
        </header>
        
      </div>
    );
  }
}

export default App;