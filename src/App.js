import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './Navigation';
import LandingPage from './LandingPage';


import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>D-NRG Okosáram</h1>
          </header>
          <Switch>
            <Route exact name="index" path="/" component={LandingPage} />
            {/* <Route exact name="components" path="/components" component={ComponentsPage} /> */}
          </Switch>
          <footer>
            <p className="App-intro">
              D-NRG, 2018
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
