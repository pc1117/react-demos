import React, { Component } from 'react';
import './App.css';
import Routers from './configs/Routers';
import "./mock/mock.js";

class App extends Component {

  render() {
    return (
      <Routers />
    );
  }
}

export default App;