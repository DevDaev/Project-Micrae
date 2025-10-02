import React, { useState } from 'react';
import s from './EBookCTA.module.css';

const cards = [
  { img: 'img/bookCover.jpeg', caption: 'Eco-waste Management' },
  { img: 'img/bookCover.jpeg', caption: 'Sustainability' },
  { img: 'img/bookCover.jpeg', caption: 'Glowing Green' },
  { img: 'img/bookCover.jpeg', caption: 'Eco-Management' },
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
          <h2 className={s.subtitle}>Glow Gently </h2>
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

        {/* Captions outside the card box
        <div className={s.captionsRow}>
          {cards.map((card, idx) => (
            <span key={idx} className={s.captionOutside}>{card.caption}</span>
          ))}
        </div> */}

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