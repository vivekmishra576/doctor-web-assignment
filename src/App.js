import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import WhyDoctors from './components/WhyDoctors';
import JoinCircle from './components/JoinCircle';
import AyurvedDoc from './components/AyurvedDoc';
import DownloadSection from './components/DownloadSection';

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
    </div>
  );
}

export default App;
