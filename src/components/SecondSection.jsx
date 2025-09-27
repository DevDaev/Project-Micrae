import React from 'react';
import s from './SecondSection.module.css';

const cards = [
  { title: 'Helpful Tips',  text: 'Manage your finance and get ready for the breakthrough' },
  { title: 'Financial Literacy', text: 'Manage your finance and get ready for the breakthrough' },
  { title: 'Community Safe Space', text: 'Manage your finance and get ready for the breakthrough' },
  { title: 'Videos', text: 'Manage your finance and get ready for the breakthrough' },
];

export default function SecondSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.heading}>Why Glow Gently Living</h2>

        <div className={s.grid}>
          {cards.map((c, i) => (
            <div key={i} className={s.card}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <a href="#read" className={s.link}>Read More &gt;&gt;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}