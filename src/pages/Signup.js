// src/pages/Signup.js
import React, { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/dashboard');
    } catch (error) {
      console.error('Failed to create an account', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Email</label>
          <input type="email" ref={emailRef} className="w-full p-2 border" />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input type="password" ref={passwordRef} className="w-full p-2 border" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
