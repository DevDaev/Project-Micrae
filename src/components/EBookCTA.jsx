import React, { useState } from 'react';
import s from './EBookCTA.module.css';

const cards = [
  { img: 'public/img/card1.jpg', caption: 'Eco-waste Management' },
  { img: 'public/img/card2.jpg', caption: 'Sustainability' },
  { img: 'public/img/card3.jpg', caption: 'Glowing Green' },
  { img: 'public/img/card4.jpg', caption: 'Eco-Management' },
];

export default function EBookCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Mock: send e-book to ${email}`);
    setEmail('');
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        {/* Centered Title */}
        <div className={s.titleBlock}>
          <h2 className={s.title}>Download Our E-Book</h2>
          <h3 className={s.subtitle}>Glow Gently</h3>
        </div>

        {/* Cards Section */}
        <div className={s.cardsGrid}>
          {cards.map((card, idx) => (
            <div key={idx} className={s.card}>
              <img src={card.img} alt={card.caption} className={s.cardImg} />
              <p className={s.cardCaption}>{card.caption}</p>
            </div>
          ))}
        </div>

        {/* Email Form */}
        <div className={s.right}>
          <p className={s.sub}>Via Access Through Your Mail</p>
          <form onSubmit={handleSubmit} className={s.form}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Get Free E-Book</button>
          </form>
        </div>
      </div>
    </section>
  );
}