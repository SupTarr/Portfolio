import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from './components/Tech';
import Project from './components/Project';
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
      <Project />
      <Contact />
    </> 
  );
}

export default App;
