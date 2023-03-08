import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiUserSmileLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} >
        <RiUserSmileLine />
      </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} >
        <GiBookshelf />
      </a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} >
        <RiCustomerServiceLine />
      </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} >
        <MdOutlineContactSupport />
      </a>
    </nav>
  );
};

export default Nav;
