// Core
import React from "react";

// Local components
import Layout from "./components/Layout/Layout";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
      </Layout>
    </div>
  );
}

export default App;
