import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>¿Qué puedo ofrecer?</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        {/* FRONTEND SERVICES */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Frontend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño de interfaces con HTML y CSS básico.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maquetación de sitios web responsive con CSS y frameworks.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Animaciones simples con CSS y JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimización de la velocidad de carga y accesibilidad web.</p>
            </li>
          </ul>
        </article>

        {/* BACKEND SERVICES */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Backend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Manejo básico de bases de datos con MySQL o MongoDB.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desarrollo de API’s con Node.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integración de bases de datos a aplicaciones web.</p>
            </li>
          </ul>
        </article>

        {/* UI/UX DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Diseño UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño de interfaces gráficas con Figma.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de prototipos interactivos en Figma.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Análisis UX y recomendaciones de mejora.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Colaboración con desarrolladores para implementación de diseño.</p>
            </li>
          </ul>
        </article>

        {/* GRAPHIC DESIGN WITH CANVA */}
        <article className="service">
          <div className="service__head">
            <h3>Diseño Gráfico</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de iconos y logotipos básicos con Canva.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño de gráficos vectoriales simples con Canva.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de material visual para redes sociales.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Edición de imágenes y elementos gráficos para webs y redes sociales.</p>
            </li>
          </ul>
        </article>

        {/* CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Creación de Contenido</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de artículos y blogs para sitios web o redes sociales.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Producción de videos básicos para plataformas sociales como YouTube, TikTok, Instagram.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Edición de videos y contenido visual para mejorar calidad y atraer audiencia.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Toma de fotografías de productos, eventos o lugares.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
