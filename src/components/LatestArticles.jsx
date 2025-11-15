import React from 'react';
import s from './LatestArticles.module.css';

const articles = [
  { id: 1, title: 'Weekly; Green Girl on budget', img: './article 1.jpg' , },
  { id: 2, title: 'Sustainable Swaps That Actually Save You Money',        img: './article 2.jpg', },
  { id: 3, title: '“Trash to Treasure” DIYs – Upcycling Old Items',            img: './article 3.jpg',  },
];

export default function LatestArticles() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.heading}>Latest Articles</h2>

        <div className={s.grid}>
          {articles.map(a => (
            <article key={a.id} className={s.card}>
              <div className="img">
                <img src={a.img} alt={a.title} />
              </div>
              <h3>{a.title}</h3>
              <p className='s.p'>{a.paragraph}</p>
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