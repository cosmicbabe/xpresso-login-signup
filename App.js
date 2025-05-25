import React, { useState } from 'react';
import './App.css';

// ----- Login and Sign Up Form ----
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(`${isLogin ? 'Logging in' : 'Signing up'} with email: ${formData.email}`);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>{isLogin ? 'Welcome back!' : 'Welcome to Xpresso!'}</h1>
        <h2>{isLogin ? ' ' : 'Please Sign Up Below 👇'}</h2>
        <form onSubmit={handleSubmit}>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. lincoln@xpresso.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="at least 8 characters"
            pattern = '[A-Za-z0-9]{8,}'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <><label for="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required /></>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="toggle" onClick={toggleMode}>
            {isLogin ? 'Sign up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default App;