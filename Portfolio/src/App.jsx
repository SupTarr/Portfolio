import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from './components/Tech';
import Work from './components/work';
import Contact from './components/Contact';
import Education from './components/Education';
import Expereince from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Expereince />
      <Tech />
      <Work />
      <Contact />
    </> 
  );
}

export default App;
