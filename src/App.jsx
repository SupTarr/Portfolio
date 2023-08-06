import React from "react";
import video from "./videos/Video.mp4";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="w-[100%] h-[100vh]">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-[100%] h-[100%] object-center object-cover"
      />
      <div className="absolute w-[100%] h-[100%] top-0">
        <Navbar
          destinations={[
            "Home",
            "About",
            "Education",
            "Expereince",
            "Skills",
            "Projects",
            "Contact",
          ]}
        />
        <Home />
        <About />
        <Education />
        <Experience />
        <Tech />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
