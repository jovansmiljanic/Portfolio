// Core
import React from "react";

// Local components
import Layout from "./components/Layout/Layout";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
