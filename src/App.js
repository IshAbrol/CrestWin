import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import AnalyticsLoader from './components/AnalyticsLoader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <AnalyticsLoader />
      <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;