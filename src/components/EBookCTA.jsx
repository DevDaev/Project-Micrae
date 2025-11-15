import React, { useState } from 'react';
import s from './EBookCTA.module.css';

const cards = [
  { img: '/available book.png', caption: 'Eco-waste Management' },
];
export default function EBookCTA() {
 
 

  return (
    <section className={s.section}>
      <div className={s.container}>
       

        {/* Cards Section */}
        <div className={s.cardsGrid}>
          {cards.map((card, idx) => (
            <div key={idx} className={s.card}>
              <img src={card.img} alt={card.caption} className={s.cardImg} />
              <p className={s.cardCaption}>{card.caption}</p>
            </div>
          ))}
        </div>
         {/* Centered Title */}
        <div className={s.titleBlock}>
          <h2 className={s.title}>Download Our E-Book</h2>
          <h2 className={s.subtitle}>Glow Gently </h2>
        </div>

        {/* Captions outside the card box
        <div className={s.captionsRow}>
          {cards.map((card, idx) => (
            <span key={idx} className={s.captionOutside}>{card.caption}</span>
          ))}
        </div> */}

      </div>
    </section>
  );
}