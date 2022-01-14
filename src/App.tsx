// Core
import React from "react";

// Local components
import Layout from "./components/layout/layout";

// Pages
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
      ,
    </div>
  );
}

export default App;
