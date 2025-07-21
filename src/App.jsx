import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Hero from './components/hero/Hero'
import ServiceSection from './components/Services/ServiceSection'
import WhyChooseUs from './components/whychoose/WhyChooseSection'

function App() {
  return (
    <>
     <Header />
     <Hero />
     <ServiceSection />
     <WhyChooseUs />
     <Footer />
    </>
  )
}

export default App
