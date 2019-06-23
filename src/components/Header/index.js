import React from 'react';
import IChuckNorris from '../../assets/img/chucknorris.gif';
import './Header.css';

const Header = () => (
  <div className="header">
    <h1 className="title">Churck Norris Search</h1>
    <img src={IChuckNorris} alt="Chuck Norris dancing" />
  </div>
);

export default Header;
