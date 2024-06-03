// src/pages/Login.js
import React, { useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate.push('/dashboard');
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Email</label>
          <input type="email" ref={emailRef} className="w-full p-2 border" />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input type="password" ref={passwordRef} className="w-full p-2 border" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
      </form>
    </div>
  );
};

export default Login;
