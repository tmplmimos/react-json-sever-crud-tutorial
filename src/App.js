import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Links from './Links';
import Tasks from './Tasks';
import Metronome from './Metronome';
import Home from './Home';

const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
}

const ROUTES = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'Tasks', path: '/Tasks', Component: Tasks },
  { name: 'Metronome', path: '/Metronome', Component: Metronome }
];

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Links /><hr/>
          {ROUTES.map(({path, Component}) => (
            <Route key={path} path={path} exact>
              {({ match}) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames='fade'
                  unmountOnExit
                >
                  <div style={{...defaultStyle}}>
                    <Component/>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </Router>
    </div>
  );
}

export default App;