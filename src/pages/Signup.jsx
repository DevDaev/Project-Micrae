import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Signup.module.css';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Mock signup for ${form.email}`);
  };

  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit} className={s.card}>
        <h1>Create Account</h1>

        <input
          name="name"
          type="text"
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

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{' '}
          <Link to="/login" className={s.link}>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}