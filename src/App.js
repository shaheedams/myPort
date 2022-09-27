import "./App.css";
import { useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="Container">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
