import React, { useState } from 'react';
import s from './EBookCTA.module.css';

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
        <div className={s.left}>
          <h2>Download Our E-Book</h2>
          <h3>Glow Gently</h3>

          <ul className={s.bullets}>
            <li>✓ Eco-waste Management</li>
            <li>✓ Sustainability</li>
            <li>✓ Glowing Green</li>
            <li>✓ Eco-Management</li>
          </ul>
        </div>

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