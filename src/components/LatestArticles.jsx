import React from 'react';
import s from './LatestArticles.module.css';

const articles = [
  { id: 1, title: '7 Zero-Waste Swaps You Can Make Today', img: 'https://source.unsplash.com/random/400x250?eco,sustainable' },
  { id: 2, title: 'How to Build a Capsule Wardrobe',        img: 'https://source.unsplash.com/random/400x250?wardrobe' },
  { id: 3, title: 'Eco-Friendly Cleaning Hacks',            img: 'https://source.unsplash.com/random/400x250?cleaning' },
];

export default function LatestArticles() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.heading}>Latest Articles</h2>

        <div className={s.grid}>
          {articles.map(a => (
            <article key={a.id} className={s.card}>
              <img src={a.img} alt={a.title} />
              <h3>{a.title}</h3>
              <a href={`#article-${a.id}`} className={s.read}>Read More</a>
            </article>
          ))}
        </div>

        <div className={s.footer}>
          <a href="#all-articles" className={s.more}>More</a>
        </div>
      </div>
    </section>
  );
}