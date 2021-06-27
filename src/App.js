import React, {Component} from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import Links from './Links';
import Tasks from './Tasks';
import Metronome from './Metronome';
import Home from './Home';
import routes from './router/routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Links /><hr/>
          <Switch>
            {routes.map((config, i) => (
              <Route key={i} {...config} />
            ))}
          </Switch>
        </BrowserRouter>

        {/*<Router>*/}
        {/*  <div>*/}
        {/*    <Links /><hr/>*/}
        {/*    <Route exact path='/' component={Home}/>*/}
        {/*    <Route path='/Tasks' component={Tasks}/>*/}
        {/*    <Route path='/Metronome' component={Metronome}/>*/}
        {/*  </div>*/}
        {/*</Router>*/}
      </div>
    );
  }
}

export default App;