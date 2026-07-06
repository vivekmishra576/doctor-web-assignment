import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import WhyDoctors from './components/WhyDoctors';
import JoinCircle from './components/JoinCircle';
import AyurvedDoc from './components/AyurvedDoc';
import DownloadSection from './components/DownloadSection';
import ContactSupport from './components/ContactSupport';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Featured />
      <WhyDoctors />
      <JoinCircle />
      <AyurvedDoc />
      <DownloadSection />
      <ContactSupport />
      <Footer />
    </div>
  );
}

export default App;
