import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CTABanner from './components/CTABanner';
import Programs from './components/Programs';
import AboutSection from './components/AboutSection';
import Testimonial from './components/Testimonial';
import Staff from './components/Staff';
import ExtraCurricular from './components/ExtraCurricular';
import Events from './components/Events';
import News from './components/News';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import StaffDetails from './pages/StaffDetails';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when hash changes
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#' from hash
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <Hero />
      <CTABanner />
      <Programs />
      <AboutSection />
      <Testimonial />
      <Staff />
      <ExtraCurricular />
      <Events />
      <News />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/staff" element={<StaffDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;