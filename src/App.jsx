import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import heroImage from './img/camiones01.jpg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Products from './components/Products';
import LoginForm from './pages/LoginForm';
import Contac from './components/Contac';

function App() {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const heroImage = heroSection.querySelector('.hero-image');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSectionHeight = heroSection.clientHeight;

      heroImage.style.backgroundPositionY = `${scrollY / heroSectionHeight * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={heroSectionRef}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
            <Router>
            <Navbar />
        <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/loginform" element={<LoginForm />} />
        </Routes>
      </Router>
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;