import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <Link to='/'> HOME </Link>
      <h1 className="page-title">Cereals</h1>
      { props.children }
    </div>
  )
}

export default NavBar;
