import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col  } from 'reactstrap';
import LandingPage from './LandingPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <Container fluid={true}>
            <Row>
              <Col sm="6">
              <h1>D-NRG Okosáram</h1>
              </Col>
              <Col>
                <img src="./flux.png" style={{maxHeight : '100px'}} />
              </Col>
            </Row>
          </Container>
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
