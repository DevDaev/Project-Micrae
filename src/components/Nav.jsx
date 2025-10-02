import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('resources');

  const handleNavClick = (link) => {
    setOpen(false);
    setActiveLink(link);
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>Earthwise <span className="text-color">Living</span></Link>

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
          {/* <div className="urls"> */}
            <a
              href="#resources"
              onClick={() => handleNavClick('resources')}
              className={activeLink === 'resources' ? s.active : ''}
            >
              RESOURCES
            </a>
            <a
              href="#articles"
              onClick={() => handleNavClick('articles')}
              className={activeLink === 'articles' ? s.active : ''}
            >
              ARTICLES
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('about')}
              className={activeLink === 'about' ? s.active : ''}
            >
              ABOUT
            </a>
            <a
              href="#partnership"
              onClick={() => handleNavClick('partnership')}
              className={activeLink === 'partnership' ? s.active : ''}
            >
              PARTNERSHIP
            </a>
            
          {/* </div> */}

          <div className="cart">
            <Link
            to="/shop"
            className={`${s.shop, s.active}`}
            onClick={() => handleNavClick('shop')}
            >
            SHOP
          </Link>
            </div>
        </nav>
      </div>
    </header>
  );
}