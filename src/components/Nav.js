import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import Button from './Button';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => setIsOpen(false);

  return (
    <>
      <div className="hidden md:flex space-x-4 text-primary">
        <Button to="/about" variant="secondary" className="hover:text-triadic2">
          About
        </Button>
        <Button to="/projects" variant="secondary" className="hover:text-analogous2">
          Projects
        </Button>
        <Button to="/services" variant="secondary" className="hover:text-triadic1">
          Services
        </Button>
        <Button to="/contact" variant="secondary" className="hover:text-triadic2">
          Contact
        </Button>
        <Button to="/login" variant="secondary" className="hover:text-monochromatic1">
          Login
        </Button>
        <Button to="/signup" variant="secondary" className="hover:text-monochromatic2">
          Sign Up
        </Button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen &&
        ReactDOM.createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                className="fixed right-10 w-80p inset-0 rounded-r-lg bg-primary text-white z-50 flex flex-col items-center justify-center"
              >
                <button onClick={closeNav} className="absolute top-4 right-4 text-white">
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <nav className="flex flex-col space-y-4 text-center">
                  <Button
                    to="/about"
                    onClick={closeNav}
                    className="block px-4 py-2 text-lg"
                    variant="secondary"
                  >
                    About
                  </Button>
                  <Button
                    to="/projects"
                    onClick={closeNav}
                    className="block px-4 py-2 text-lg"
                    variant="secondary"
                  >
                    Projects
                  </Button>
                  <Button
                    to="/services"
                    onClick={closeNav}
                    className="block px-4 py-2 text-lg"
                    variant="secondary"
                  >
                    Services
                  </Button>
                  <Button
                    to="/contact"
                    onClick={closeNav}
                    className="block px-4 py-2 text-lg"
                    variant="secondary"
                  >
                    Contact
                  </Button>
                  <Button
                    to="/login"
                    onClick={closeNav}
                    className="block px-4 py-2 text-lg"
                    variant="secondary"
                  >
                    Login
                  </Button>
                  <Button
                    to="/signup"
                    onClick={closeNav}
                    className="block px-4 py-2 text-lg"
                    variant="secondary"
                  >
                    Sign Up
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Nav;
