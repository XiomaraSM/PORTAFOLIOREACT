import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/3.png";
import IMG4 from "../../assets/4.png";

//DO NOT USE THE IMAGES IN PRODUCTION
//HERE IS THE CTA

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Web error 404",
    github: "https://github.com/XiomaraSM/Error-404.git",
    demo: "https://web-error-404.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Web Tributo",
    github: "https://github.com/XiomaraSM/Web-Tributo-al-Breakin.git",
    demo: "https://web-tributo-al-breakin.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Las Brisas del Sabor",
    github: "https://github.com/XiomaraSM/ClienteReal.git",
    demo: "https://las-brisas-del-sabor.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Video Club",
    github: "https://github.com/XiomaraSM/VIDEOCLUB.git",
    demo: "https://video-club.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis Trabajos Recientes</h5>
      <h2>Portafolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target={"blank"}>
                  Demostración
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
