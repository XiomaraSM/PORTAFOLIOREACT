import React, { useRef } from "react";
import "./contact.css";
import { CiMail } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6jd89c8",
        "template_6f5w3m8",
        form.current,
        "mvvxWr7wNde84QTaF"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // limpiar los campos del formulario
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Ponerse en Contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail className="contact__option-icon" />
            <h4>Correo</h4>
            <h5>xsanchezmoreno@gmail.com</h5>
            <a href="mailto:sanchezmorenoxiomara@gmail.com" target={"blank"}>
              Enviar un Mensaje
            </a>
          </article>
          <article className="contact__option">
            {/* Cambié el enlace de Telegram por el de Linktree */}
            <h4>Linktree</h4>
            <h5>MaraHekapoo</h5>
            <a href="https://linktr.ee/mara_hekapoo" target={"blank"}>
              Visita mi Linktree
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Teléfono</h4>
            <h5>(+57)3005498223</h5>
            <a href="tel:+573005498223" target={"blank"}>
              Llamar
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="tu correo electronico"
            required
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
