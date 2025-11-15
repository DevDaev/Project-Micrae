import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.social}>
          <a
            href="https://www.instagram.com/desola"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={s.icon}
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://Substack.com/desola"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className={s.icon}
            title="Substack"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
              <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" />
              <rect x="6" y="15" width="8" height="2" rx="1" fill="currentColor" />
            </svg>
          </a>
        </div>

        <p className={s.brand}>EARTHWISE LIVING</p>

        <div className={s.legal}>
          <a href="/privacy" className={s.legalLink}>Privacy</a>
          <span className={s.dot} aria-hidden="true">•</span>
          <a href="/cookies" className={s.legalLink}>Cookies</a>
        </div>
      </div>
    </footer>
  );
}