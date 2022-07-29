import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from './components/Tech';
import Work from './components/work';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Tech />
      <Work />
      <Contact />
    </> 
  );
}

export default App;
