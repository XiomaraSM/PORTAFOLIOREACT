import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>¿Qué puedo ofrecer?</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Diseño UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Diseño de interfaces gráficas de usuario para aplicaciones web y
                móviles con Figma
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de prototipos interactivos en Figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Análisis y evaluación de la experiencia del usuario (UX) y
                recomendaciones de mejora.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Diseño de gráficos y elementos visuales para aplicaciones y
                sitios web.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Trabajo en colaboración con desarrolladores para implementar
                diseños en código.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creación de diseños de sitios web simples y atractivos
                utilizando HTML y CSS básico.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Maquetación de sitios web responsive utilizando CSS o framework
                CSS.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementación de animaciones simples utilizando CSS y/o
                JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mejora de la usabilidad y accesibilidad de sitios web
                existentes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Optimización de la velocidad de carga de sitios web utilizando
                técnicas de compresión y optimización de imágenes y código.
              </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPED */}

        <article className="service">
          <div className="service__head">
            <h3>Creación de Contenido</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creación y diseño de iconos, logotipos y gráficos vectoriales
                basicos con Canva
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creación de artículos para sitios web, blogs o redes sociales
                que estan comenzando
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                creación de videos basicos para plataformas como YouTube,
                TikTok, reels de instagram y/o facebook
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Edición de videos existentes para mejorar la calidad o crear
                contenido para redes sociales
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Toma de fotografías de productos, eventos o lugares para aplicar
                en redes sociales
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
