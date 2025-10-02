import React from 'react';
import s from './LatestArticles.module.css';

const articles = [
  { id: 1, title: '7 Zero-Waste Swaps You Can Make Today', img: './img/Latest Article 1.jpg' , paragraph: 'lorem ipsum habehbhbhyu huybac hihaevnj bygerg ainr hbuagyf haygyer bagfyien baueg7tfgae hby8agefyb'},
  { id: 2, title: 'How to Build a Capsule Wardrobe',        img: './img/Latest Article 2.jpg', paragraph: 'lorem ipsum habehbhbhyu huybac hihaevnj bygerg ainr hbuagyf haygyer bagfyien baueg7tfgae hby8agefyb' },
  { id: 3, title: 'Eco-Friendly Cleaning Hacks',            img: './img/Latest Article 3.jpg', paragraph: 'lorem ipsum habehbhbhyu huybac hihaevnj bygerg ainr hbuagyf haygyer bagfyien baueg7tfgae hby8agefyb' },
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