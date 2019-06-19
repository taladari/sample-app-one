import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div id="page-content">
      <Home />
      <About />
      <Features />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
