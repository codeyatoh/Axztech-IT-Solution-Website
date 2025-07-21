import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './components/hero/Hero';
import ServiceSection from './components/Services/ServiceSection';
import WhyChooseUs from './components/whychoose/WhyChooseSection';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ServiceSection />
              <WhyChooseUs />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );                                                                                             
}

export default App;
