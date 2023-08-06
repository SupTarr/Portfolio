import React from "react";
import video from "./videos/Video.mp4";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

import C from "./images/c-logo.png";
import Python from "./images/python-logo.png";
import Html from "./images/html.png";
import Css3 from "./images/css.png";
import Bootstrap from "./images/bootstrap-logo.svg";
import Tailwind from "./images/tailwind.png";
import JavaScript from "./images/javascript.png";
import reScript from "./images/rescript.png";
import ReactImg from "./images/react.png";
import Node from "./images/node.png";
import Mongo from "./images/mongodb.png";
import SQL from "./images/SQL.png";
import Git from "./images/Git-logo.png";
import GitHub from "./images/github.png";

import Colmar from "./images/ColmarAcademy.png";
import Adhoc from "./images/adhoc.png";
import findYourHat from "./images/findYourHat.png";
import Jammming from "./images/Jammming.png";
import Ravenous from "./images/Ravenous.png";
import Immifit from "./images/Immifit.png";
import myIntroInReason from "./images/myIntroInReason.png";

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
            "Experience",
            "Skills",
            "Projects",
            "Contact",
          ]}
        />
        <Home />
        <About />
        <Education />
        <Experience />
        <Techs
          lists={[
            {
              name: "C",
              image: C,
            },
            {
              name: "Python",
              image: Python,
            },
            {
              name: "Html",
              image: Html,
            },
            {
              name: "Css3",
              image: Css3,
            },
            {
              name: "Bootstrap",
              image: Bootstrap,
            },
            {
              name: "Tailwind",
              image: Tailwind,
            },
            {
              name: "JavaScript",
              image: JavaScript,
            },
            {
              name: "reScript",
              image: reScript,
            },
            {
              name: "ReactImg",
              image: ReactImg,
            },
            {
              name: "Node",
              image: Node,
            },
            {
              name: "Mongo",
              image: Mongo,
            },
            {
              name: "SQL",
              image: SQL,
            },
            {
              name: "Git",
              image: Git,
            },
            {
              name: "GitHub",
              image: GitHub,
            },
          ]}
        />
        <Projects
          lists={[
            {
              name: "Colmar Academy",
              image: Colmar,
              gitHub: "https://github.com/SupTarr/ColmarAcademy",
              liveSite: "https://suptarr.github.io/ColmarAcademy/",
              stacks: "HTML, CSS",
              description:
                "Made a website from wireframe with HTML, plain CSS, and responsive design",
            },
            {
              name: "Adhoc",
              image: Adhoc,
              gitHub: "https://github.com/SupTarr/Adhoc",
              liveSite: "https://suptarr.github.io/Adhoc/",
              stacks: "HTML, Bootstrap",
              description:
                "Made a website from wireframe with HTML, Bootstrap, and responsive design",
            },
            {
              name: "Find Your Hat",
              image: findYourHat,
              gitHub: "https://github.com/SupTarr/findYourHat",
              liveSite: "https://replit.com/@SupTarr/findYourHat#README.md",
              stacks: "JavaScript",
              description:
                "Used a JavaScript (Function, Conditional Statements, and Class) to make a game that controlled to get a hat without falling into a hole",
            },
            {
              name: "Jammming",
              image: Jammming,
              gitHub: "https://github.com/SupTarr/Jammming",
              liveSite: "https://tarjammming.surge.sh/",
              stacks: "HTML, CSS, JavaScript, ReactJS",
              description:
                "Made a website with ReactJS and managed a song data from Spotify API to show a song and added a song to a new Spotify playlist",
            },
            {
              name: "Ravenous",
              image: Ravenous,
              gitHub: "https://github.com/SupTarr/Ravenous",
              liveSite: "https://supravenous.surge.sh/",
              stacks: "HTML, CSS, JavaScript, ReactJS",
              description:
                "Made a website with ReactJS and managed businesses data from Yelp API to show each data",
            },
            {
              name: "Immifit",
              image: Immifit,
              gitHub: [
                "https://github.com/SupTarr/FrontendImmifit",
                "https://github.com/SupTarr/BackendImmifit",
              ],
              liveSite: "https://immifit.vercel.app/",
              stacks: "MongoDB, Express, ReactJS, NodeJS",
              description:
                "Made a website application with MERN stack for exercise tracker",
            },
            {
              name: "My Intro In Reason",
              image: myIntroInReason,
              gitHub: "https://github.com/SupTarr/myIntroInReason",
              liveSite: "https://suptarrescript.surge.sh/",
              stacks: "HTML, CSS, JavaScript, ReactJS, ReScript",
              description:
                "My introduction to the ReScript that combined with React to make a React component",
            },
          ]}
        />
        <Contact />
      </div>
    </div>
  );
}

export default App;
