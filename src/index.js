import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { AnimatePresence } from 'framer-motion';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </AuthProvider>
  </React.StrictMode>
);
