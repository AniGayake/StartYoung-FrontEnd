import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Testimonials from '../Testimonials';

function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials/>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
