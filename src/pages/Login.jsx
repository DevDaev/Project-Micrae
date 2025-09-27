import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Login.module.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Mock login for ${form.email}`);
  };

  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit} className={s.card}>
        <h1>Hlla Sun</h1>

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

        <button type="submit">Log In</button>

        <p>
          Don’t have an account?{' '}
          <Link to="/signup" className={s.link}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}