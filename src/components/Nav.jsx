import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('resources');

  const navRef = useRef(null);
  const btnRef = useRef(null);

  const handleNavClick = (link) => {
    setOpen(false);
    setActiveLink(link);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (!open) return;
      const target = e.target;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>Earthwise <span className="text-color">Living</span></Link>

        {/* hamburger */}
        <button
          ref={btnRef}
          className={s.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav ref={navRef} className={`${s.nav} ${open ? s.show : ''}`}>
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

          <div className="cart">
            <Link
              to="/shop"
              className={`${s.shop} ${activeLink === 'shop' ? s.active : ''}`}
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