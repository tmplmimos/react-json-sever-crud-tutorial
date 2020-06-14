import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from './Links';
import Tasks from './Tasks';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Links /><hr/>
            <Route exact path='/' component={Home}/>
            <Route path='/Tasks' component={Tasks}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;