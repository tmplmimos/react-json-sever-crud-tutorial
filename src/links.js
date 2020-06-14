import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Links = () => (
  <Router>
    <div style={{margin: 20}}>
      <Route exact path='/' component={Home} />
      <Route path='/tasks' component={Tasks} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h1>header</h1>
    <p>...</p>
    <ul>
      <li><a href='tasks'>Tasks</a></li>
    </ul>
  </div>
)

const Tasks = () => (
  <div>
    <h1>Easy</h1>
    <p><a href="/">Back</a></p>
  </div>
)

export default Links