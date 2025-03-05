import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import ProjectOverview from "./components/ProjectOverview";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Main Sections on Home Page */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />
          </>
        } />

        {/* Project Overview Route */}
        <Route path="/project/:id" element={<ProjectOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
