import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  );
}

const headerStyle = {
  background: 'green',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin: 'auto'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header;
