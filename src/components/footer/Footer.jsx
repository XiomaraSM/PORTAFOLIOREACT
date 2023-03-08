import React from "react";
import "./footer.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MARA HEKAPOO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonios</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank">
          <SlSocialLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <FiGithub />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://youtube.com" target="_blank">
          <BsYoutube />
        </a>
        <a href="https://tiktok.com" target="_blank">
          <FaTiktok />
        </a>
        <a href="https://twitter.com" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://messenger.com">
          <FaFacebookMessenger />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Mara Hekapoo <br />
          Tutorial de Portafolio web &copy; EGATOR TUTORIALS All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
