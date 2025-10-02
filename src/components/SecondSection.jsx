import React from 'react';
import s from './SecondSection.module.css';

const cards = [
  { title: 'Financial Literacy', text: 'Manage your finance and get ready for the breakthrough', src: 'public/img/Latest Article 1.jpg' },
  { title: 'Safe Space', text: 'Manage your finance and get ready for the breakthrough', src: 'public/img/Latest Article 1.jpg' },
  { title: 'Helpful Tips',  text: 'Manage your finance and get ready for the breakthrough', src: 'public/img/Latest Article 1.jpg' },
];

export default function SecondSection() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.heading}>Why Glow Gently Living</h2>

        <div className={s.grid}>
          {cards.map((c, i) => (
            <div key={i} className={s.card}>
              <img src="src" alt="icon" />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <a href="#read" className={s.link}>Read More &gt;&gt;</a>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Video Section */}
      
      <div className={s.videoSection}>
        <div className={s.videoWrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}