import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js';
// import './App.css'
import './main.css'

import DinosaurListContainer from './containers/dinosaurs/DinosaurListContainer';
import SingleDinosaurContainer from './containers/dinosaurs/SingleDinosaurContainer';
import DinosaurFormContainer from './containers/dinosaurs/DinosaurFormContainer';
import DinosaurEditFormContainer from './containers/dinosaurs/DinosaurEditFormContainer';

import PaddockListContainer from './containers/paddocks/PaddockListContainer';
import SinglePaddockContainer from './containers/paddocks/SinglePaddockContainer';
import PaddockFormContainer from './containers/paddocks/PaddockFormContainer';
import PaddockEditFormContainer from './containers/paddocks/PaddockEditFormContainer';

import EmployeeListContainer from './containers/employee/EmployeeListContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
          <Route exact path = '/dinosaurs' component={DinosaurListContainer}/>
          <Route exact path = '/dinosaurs/new' component={DinosaurFormContainer}/>
          <Route exact path = '/dinosaurs/edit/:id' render = {(props) =>{
            const id = props.match.params.id;
            return <DinosaurEditFormContainer id = {id} />
            }}
          />
          <Route exact path="/dinosaurs/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SingleDinosaurContainer id = {id} />
            }}
          />

          <Route exact path = '/paddocks' component={PaddockListContainer}/>
          <Route exact path = '/paddocks/new' component={PaddockFormContainer}/>
          <Route exact path = '/paddocks/edit/:id' render = {(props) =>{
            const id = props.match.params.id;
            return <PaddockEditFormContainer id = {id} />
            }}
          />
          <Route exact path="/paddocks/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SinglePaddockContainer id = {id} />
          }} />
            <Route exact path ='/employees' component={EmployeeListContainer}/>
          />
            </Switch>
          </React.Fragment>
      </Router>

    );
  }
}

export default App;
