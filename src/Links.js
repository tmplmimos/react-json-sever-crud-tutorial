/** @jsx jsx */
import React from 'react'
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'

const ul = css`
  display: flex;  
`;

const li = css`
  list-style: none;
  :nth-child(n+2) {
    margin-left: 8px;
  }
`;

const a = css`
  padding: 8px;
  transition: color 0.3s;
  text-decoration: none;
  :hover,
  :active,
  :visited {
    color: #666 !important;
  }
`;

class Links extends React.Component {
  render(){
    return(
      <ul css={ul}>
        <li css={li}>
          <Link to="/" css={a}>Home</Link>
        </li>
        <li css={li}>
          <Link to="/Tasks" css={a}>Tasks</Link>
        </li>
        <li css={li}>
          <Link to="/Metronome" css={a}>Metronome</Link>
        </li>
      </ul>
    )
  }
}

export default Links;