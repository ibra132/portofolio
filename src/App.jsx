import { Toaster } from "react-hot-toast";

import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Tools from "./components/sections/Tools";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Hero />
      <About />
      <Tools />
      <Project />
      <Contact />
    </>
  );
}

export default App;
