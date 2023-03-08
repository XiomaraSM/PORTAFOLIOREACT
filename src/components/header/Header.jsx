import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ME.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container .header__container">
        <h5>Hola! Soy</h5>
        <h1 id="header">Xiomara Sanchez Moreno</h1>
        <h5 className="text-light">Programadora Fullstack</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" className="foto1" />
        </div>

        <a href="#contact" className="scroll_down">
          {" "}
          Sigue bajando
        </a>
      </div>
    </header>
  );
};

export default Header;
