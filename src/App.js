import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import ComponentsPage from './ComponentsPage';


import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <Switch>
            <Route exact name="index" path="/" component={LandingPage} />
            <Route exact name="components" path="/components" component={ComponentsPage} />
          </Switch>
          <footer>
            <p className="App-intro">
              D-N-R-G
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
