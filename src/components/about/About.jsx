import React from "react";
import "./about.css";
import Mara from "../../assets/MARA HEKAPOO.png";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Conóceme</h5>
      <h2>Sobre mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Mara} alt="Imagen de Mara" />
          </div>
        </div>

        <p>
            Soy estudiante de Técnico en Programación de Software, con un fuerte interés en la programación. Busco una oportunidad para continuar aprendiendo y crecer profesionalmente. Tengo conocimientos básicos en desarrollo web y bases de datos, y un alto deseo de adquirir experiencia práctica en la industria tecnológica.
          </p>

          <br />
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Aprendiz en Sena</h5>
              <small>En prácticas, con conocimientos básicos de programación en Java.</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Bootcamp Educamas</h5>
              <small>Desarrollo de proyectos como estudiante Fullstack, creación de páginas web sencillas y trabajo colaborativo en proyectos de fundaciones, incluyendo la creación de bases de datos.</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Proyectos personales</h5>
              <small>Explorando tecnologías web y desarrollando habilidades técnicas mediante la colaboración con amigos y familiares en la creación de sitios web.</small>
            </article>

          </div>
<br />
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
