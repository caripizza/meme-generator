import React from 'react';
import styles from './Header.css';
import logo from '../assets/logo.png';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header className={styles.header}>
      <img src={logo}/>
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
