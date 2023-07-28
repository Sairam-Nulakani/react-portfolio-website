import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
