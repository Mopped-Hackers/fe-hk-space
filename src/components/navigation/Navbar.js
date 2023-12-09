// Navbar.js
import React from 'react';
import styles from '../../styles/Navbar.module.css';
import { ABOUT, CONTACT, DEMO } from '../../constants';


const Navbar = (props) => {
  const { activeHandler, isActive } = props;

  return (
    <div className={styles.container}>
      <img
        src="https://s.abcnews.com/images/US/california-fires-01-rt-jef-201004_1601827276845_hpMain_2_16x9_1600.jpg"
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.overlayCenter}>
        <p>a</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.tabs}>
        <a onClick={() => activeHandler(DEMO)} className={isActive.demo ? styles.active : ''}>Demo</a>
        <a onClick={() => activeHandler(ABOUT)} className={isActive.about ? styles.active : ''}>About us</a>
        <a onClick={() => activeHandler(CONTACT)} className={isActive.contact ? styles.active : ''}>Contact us</a>
      </div>
    </div>
  );
};

export default Navbar;
