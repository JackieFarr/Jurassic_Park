import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <NavBar />
      <div>
        <h1>Jurassic park</h1>
      </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
