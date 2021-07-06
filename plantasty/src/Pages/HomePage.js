import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import HomeInfoCard from '../Components/InfoCard';
import Hero from '../Components/Hero'
function HomePage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Hero />
      <HomeInfoCard />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
