import React from 'react';
import s from './Hero.module.css';

export default function HeroBanner() {
  return (
    <section className={s.banner}>
      
      <div className={s.content}>
        <h1 className={s.title}>
          Glow Softly, Live Intentionally <br />
          <span className={s.subTitle}>& Love the earth gently</span>
        </h1>
        
        <p className={s.text}>
          Welcome to your safe space where you get to live intentionally and
          sustainably whilst learning & glowing as you go.
        </p>

        <a href="#explore" className={s.cta}>Explore</a>
      </div>

      <div className={s.image}>
        <img src="/undraw_girls-just-wanna-have-fun_jj2i.png" alt=""/>
      </div>

    </section>
  );
}
