import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader onLoadComplete={() => setIsLoading(false)} />
      ) : (
        <div className="bg-white h-screen">
          <Header />
          <main className="h-82p w-full scroll-smooth">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      )}
    </Router>
  );
};

export default App;
