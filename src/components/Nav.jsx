import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>EarthwiseLiving</Link>

        {/* hamburger */}
        <button
          className={s.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${s.nav} ${open ? s.show : ''}`}>
          <a href="#resources" onClick={() => setOpen(false)}>RESOURCES</a>
          <a href="#articles"   onClick={() => setOpen(false)}>ARTICLES</a>
          <a href="#about"      onClick={() => setOpen(false)}>ABOUT</a>
          <a href="#partnership"onClick={() => setOpen(false)}>PARTNERSHIP</a>
          <Link to="/shop" className={s.shop}>SHOP</Link>
        </nav>
      </div>
    </header>
  );
}