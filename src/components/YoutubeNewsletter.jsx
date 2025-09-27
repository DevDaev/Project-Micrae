import React, { useState } from 'react';
import s from './YoutubeNewsletter.module.css';

export default function YoutubeNewsletter() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Mock: subscribe ${form.name} at ${form.email}`);
    setForm({ name: '', email: '' });
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        {/* YouTube CTA */}
        <div className={s.col}>
          <h2>Earthwise Living On Youtube</h2>
          <p>Subscribe to Earthwise Living on YouTube</p>
          <a
            href="https://www.youtube.com/@earthwiseliving"
            target="_blank"
            rel="noreferrer"
            className={s.btn}
          >
            Subscribe
          </a>
        </div>

        {/* Newsletter */}
        <div className={s.col}>
          <h2>News Letter Subscription</h2>
          <form onSubmit={handleSubmit} className={s.form}>
            <input
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
}