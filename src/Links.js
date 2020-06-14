import React from 'react'
import { Link } from 'react-router-dom'

class Links extends React.Component {
  render(){
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/Tasks">Tasks</Link>
      </div>
    )
  }
}

export default Links;