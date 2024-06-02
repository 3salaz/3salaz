// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';

const Home = () => (
  <>
    <Header />
    <main className="container mx-auto p-4">
      <section className="text-center my-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="mb-4">Showcasing Excellence in Digital Solutions</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
      </section>
      <section className="my-8">
        {/* Add more sections as needed */}
      </section>
    </main>
  </>
);

export default Home;
