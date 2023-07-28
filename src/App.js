import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Header />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/home/experience" element={<Experience />} />
          <Route path="/home/portfolio" element={<Portfolio />} />
          <Route path="/home/testimonials" element={<Testimonials />} />
          <Route path="/home/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
