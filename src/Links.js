import React from 'react'
import { Link } from 'react-router-dom'

class Links extends React.Component {
  render(){
    return(
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/Metronome">Metronome</Link>
        </li>
      </ul>
    )
  }
}

export default Links;