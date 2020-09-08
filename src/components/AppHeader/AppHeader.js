import React from 'react';
import logo from '../../logo.svg';

const AppHeader = (props) => {
  return (
    <header style={ {
    	textAlign: 'center',
    	fontWeight: 'bold',
    	padding: '10px 15px',
    	marginBottom: 30,
    	background: '#f0f0f0'
    } }>
        <img className="Header__logo" src={logo} alt="logo" /><br/>Scalable Path boilerplate
    </header>
  )
}

export default AppHeader;