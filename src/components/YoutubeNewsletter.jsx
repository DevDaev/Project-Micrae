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


      <div className={s.box}>
        <button className= {s.btn}> Subscribe to Glow Softly, Gently</button>
        </div>
      </div>
    </section>
  );
}