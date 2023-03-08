import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>¿Qué habilidades tengo?</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Front-end</h3>
          <div className="experience__content">
            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experiencia práctica</small>
              </div>
            </article>

            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experiencia práctica</small>
              </div>
            </article>

            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Conocimiento básico</small>
              </div>
            </article>

            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experiencia práctica</small>
              </div>
            </article>

            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Conocimiento básico</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Desarrollo Back-end</h3>
          <div className="experience__content">
            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Familiaridad</small>
              </div>
            </article>

            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermedia</small>
              </div>
            </article>

            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>My SQL</h4>
                <small className="text-light">Experiencia práctica</small>
              </div>
            </article>

            <article experience__details>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Conocimiento básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
