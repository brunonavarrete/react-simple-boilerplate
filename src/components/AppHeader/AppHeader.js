import React from 'react';
import logo from '../../logo.svg';

const AppHeader = (props) => {
  return (
    <header style={ {textAlign: 'right'} }>
        <img className="Header__logo" src={logo} alt="logo" />
    </header>
  )
}

export default AppHeader;