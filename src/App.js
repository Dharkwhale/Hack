import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Steps from './components/Steps';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div class='text-white bg-[#1A1919]'>
      <Navbar />
      <Hero />
      <About />
      <Steps />
      <Service />
      <Newsletter />
      
    </div>
  );
}

export default App;
