import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Resume from "./Pages/Resume.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}