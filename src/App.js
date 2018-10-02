import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          
            <Route exact name="index" path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
          
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
