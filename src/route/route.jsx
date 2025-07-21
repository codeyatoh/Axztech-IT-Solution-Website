import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import ServiceSection from '../components/Services/ServiceSection';
import WhyChooseUs from '../components/whychoose/WhyChooseSection';
import Contact from '../components/contact/contact';

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Hero />
          <ServiceSection />
          <WhyChooseUs />
        </>
      }
    />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes; 