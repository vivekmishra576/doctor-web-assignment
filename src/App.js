import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import WhyDoctors from './components/WhyDoctors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <Featured />
      <WhyDoctors />
    </div>
  );
}

export default App;
