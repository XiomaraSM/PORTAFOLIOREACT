import React from "react";
import "./about.css";
import Mara from "../../assets/MARA HEKAPOO.png";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsFolderSymlinkFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Conoceme</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me image">
            <img src={Mara} alt="aboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>Aprendiendo programación</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Proyectos personales</h5>
              <small>
                Colaborando a mis amigos y familiares con sus sitios web
              </small>
            </article>

            <article className="about__card">
              <BsFolderSymlinkFill className="about__icon" />
              <h5>Proyectos</h5>
              <small>Explorando tecnologías Web</small>
            </article>
          </div>

          <p>
            "Soy una apasionada por la tecnología y el constante aprendizaje. Mi
            interés en la programación comenzó desde la infancia pero hasta hace
            poco tiempo he tenido la oportunidad de aprenderlo poco a poco, pero
            desde entonces he estado dedicando muchas horas a estudiar y
            practicar diferentes lenguajes y herramientas de programación. He
            desarrollado habilidades en HTML, CSS y JavaScript. Estoy emocionada
            por continuar explorando otras áreas de la programación. Me
            considero una persona creativa, colaboradora y perseverante, siempre
            buscando nuevos desafíos y oportunidades para crecer en mi carrera
            como programadora."
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
