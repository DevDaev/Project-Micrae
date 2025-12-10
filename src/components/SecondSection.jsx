import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import s from './SecondSection.module.css';

const cards = [
  { title: 'Financial Literacy', text: 'Manage your finance and get ready for the breakthrough' },
  { title: 'Safe Space', text: 'A welcoming, private community for growth' },
  { title: 'Helpful Tips', text: 'Practical tips you can apply today' },
];

function Icon({ name }) {
  const common = { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };
  if (name === 'Financial Literacy') {
    return (
      <svg {...common} aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v6" />
        <path d="M20 7v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7" />
        <path d="M7 12h10" />
      </svg>
    );
  }

  if (name === 'Safe Space') {
    return (
      <svg {...common} aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l7 4v6c0 5-3.8 9-7 10-3.2-1-7-5-7-10V6l7-4z" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18a3 3 0 0 0 6 0" />
      <path d="M10.29 9a3 3 0 1 1 3.42 0L12 13" />
      <path d="M12 2v2" />
    </svg>
  );
}

export default function SecondSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_NEWSLETTER_TEMPLATE_ID,
      { user_email: email },
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then(() => {
        setStatus('Subscribed successfully!');
        setEmail('');
        setTimeout(() => setStatus(''), 10000);
      })
      .catch((err) => {
        console.error('Newsletter subscription failed:', err);
        setStatus('Subscription failed. Please try again.');
      });
  };

  return (
    <section id="second" className={s.section}>
      <div className={s.container}>
        <h2 className={s.heading}>Why Glow Gently Living</h2>

        <div className={s.grid}>
          {cards.map((c, i) => (
            <div key={i} className={s.card}>
              <div className={s.icon} aria-hidden>
                <Icon name={c.title} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <form className={s.newsletter} onSubmit={handleSubscribe}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={s.emailInput}
            placeholder="Join the Newsletter @email"
            aria-label="Email address"
            required
          />
          <button type="submit" className={s.subscribeBtn}>Subscribe</button>
        </form>

        {status && <p>{status}</p>}
      </div>
    </section>
  );
}
