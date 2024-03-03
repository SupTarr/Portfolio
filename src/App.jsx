import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

import C from "./images/techs/c.png";
import Python from "./images/techs/python.png";
import JavaScript from "./images/techs/javascript.png";
import ReScript from "./images/techs/rescript.png";
import Go from "./images/techs/go.png";
import Html from "./images/techs/html.png";
import Css3 from "./images/techs/css.png";
import Bootstrap from "./images/techs/bootstrap.svg";
import Tailwind from "./images/techs/tailwind.png";
import ReactImg from "./images/techs/react.png";
import Node from "./images/techs/node.png";
import Express from "./images/techs/express.png";
import Mongo from "./images/techs/mongodb.png";
import SQL from "./images/techs/sql.png";
import Git from "./images/techs/git.png";
import GitHub from "./images/techs/github.png";
import Bitbucket from "./images/techs/bitbucket.png";
import GitLab from "./images/techs/gitlab.svg";

import Colmar from "./images/projects/colmar-academy.png";
import Adhoc from "./images/projects/adhoc.png";
import findYourHat from "./images/projects/find-your-hat.png";
import Jammming from "./images/projects/jammming.png";
import Ravenous from "./images/projects/ravenous.png";
import Immifit from "./images/projects/immifit.png";
import myIntroInReScript from "./images/projects/my-intro-in-rescript.png";

function App() {
  return (
    <>
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
            name: "JavaScript",
            image: JavaScript,
          },
          {
            name: "ReScript",
            image: ReScript,
          },
          {
            name: "Go",
            image: Go,
          },
          {
            name: "HTML",
            image: Html,
          },
          {
            name: "CSS3",
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
            name: "React",
            image: ReactImg,
          },
          {
            name: "Node",
            image: Node,
          },
          {
            name: "Express",
            image: Express,
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
          {
            name: "Bitbucket",
            image: Bitbucket,
          },
          {
            name: "GitLab",
            image: GitLab,
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
            liveSite: "https://jammming.suptarr.vercel.app/",
            stacks: "HTML, CSS, JavaScript, ReactJS",
            description:
              "Made a website with ReactJS and managed a song data from Spotify API to show a song and added a song to a new Spotify playlist",
          },
          {
            name: "Ravenous",
            image: Ravenous,
            gitHub: "https://github.com/SupTarr/Ravenous",
            liveSite: "https://ravenous.suptarr.vercel.app/",
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
            liveSite: "https://immifit.suptarr.vercel.app/",
            stacks: "MongoDB, Express, ReactJS, NodeJS",
            description:
              "Made a website application with MERN stack for exercise tracker",
          },
          {
            name: "My Intro In ReScript",
            image: myIntroInReScript,
            gitHub: "https://github.com/SupTarr/myIntroInReScript",
            liveSite: "https://my-intro-in-rescript.suptarr.vercel.app/",
            stacks: "HTML, CSS, JavaScript, ReactJS, ReScript",
            description:
              "My introduction to the ReScript that combined with React to make a React component",
          },
        ]}
      />
      <Contact />
    </>
  );
}

export default App;
