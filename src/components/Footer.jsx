import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <nav className={s.nav}>
          <a href="#discover">DISCOVER</a>
          <a href="#courses">COURSES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <p className={s.brand}>EARTHWISELIVING</p>
      </div>
    </footer>
  );
}