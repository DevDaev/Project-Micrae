import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Project Micrae</h1>
      <p>This is the hero section of your responsive website.</p>
    </section>
  );
};

export default Hero;



// React component (HeroBanner.jsx)
// ```jsx
// import React from 'react';
// import s from './HeroBanner.module.css';

// export default function HeroBanner() {
//   return (
//     <section className={s.banner}>
//       <div className={s.content}>
//         <h1 className={s.title}>
//           Glow Softly, Live Intentionally <br />
//           <span className={s.subTitle}>& Love the earth gently</span>
//         </h1>
//         <p className={s.text}>
//           Welcome to your safe space where you get to live intentionally and
//           sustainably whilst learning & glowing as you go.
//         </p>
//         <a href="#explore" className={s.cta}>
//           Explore
//         </a>
//       </div>
//     </section>
//   );
// }