import React from 'react';
import NavBar from './Component/Navbar/Navbar';
// import Home from './Component/Home/Home';
import HeroPage from './Component/HeroPage/HeroPage';
import WhoWeAre from './Component/WhoWeAre/WhoWeAre';
import AboutUs from './Component/AboutUs/AboutUs';
import ContactUs from './Component/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div >
      <NavBar />
      <HeroPage />
      <AboutUs />
      <WhoWeAre />
      
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
