// three components for one page?:
import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';

function VegucateMe() {
  return (
    <div>
      <div>
        <Navbar />
        <h1>Vegucate me page</h1>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default VegucateMe;
