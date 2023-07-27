import React from "react";
import "./portfolio.css";
import ECOM from "../../assets/e-commerce.webp";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: ECOM,
      title: "E-Commerce Website",
      github: "https://github.com/Sairam-Nulakani?tab=repositories",
      demo: "https://github.com/Sairam-Nulakani?tab=repositories",
    },
    {
      id: 2,
      image: ECOM,
      title: "Food Order App",
      github: "https://github.com/Sairam-Nulakani?tab=repositories",
      demo: "https://github.com/Sairam-Nulakani?tab=repositories",
    },
    {
      id: 3,
      image: ECOM,
      title: "Resume Builder App",
      github: "https://github.com/Sairam-Nulakani?tab=repositories",
      demo: "https://github.com/Sairam-Nulakani?tab=repositories",
    },
  ];
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>My Recent Work</h2>
      <div className="container portfolio__container">
        {data.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn" target="_blank">
                GitHub
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
