import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.png";
import AVATAR2 from "../../assets/avatar2.jpeg";
import AVATAR3 from "../../assets/avatar3.png";
import AVATAR4 from "../../assets/avatar4.png";
import AVATAR5 from "../../assets/avatar5.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVATAR1,
    name: "H&G Vivamos Mejor",
    link: "https://linktr.ee/hygvivamos",
    review:
      "Hola a Todos, hoy quiero compartir mi experiencia al recibir las redes sociales para mi emprendimiento. Con el acompañamiento de Xiomara he recibido asesoria sobre la importancia de trascender los negocios a internet y gracias a esto hoy tengo prescencia digital para poder trabajar facilmente, ella creo todo mi contenido y redes sociales con los servicios que trabajo. Actualmente administro mis redes sociales y estoy emocionada de ver lo que el futuro traera a mi negocio con esta decición",
  },
  {
    avatar: AVATAR2,
    name: "Las Brisas del Sabor",
    link: "https://linktr.ee/lasbrisasdelsabor",
    review:
      "Este es un negocio que se caracteriza por sus trabajadoras, mujeres cabeza de hogar victimas del conflicto armado quienes nos dedicamos a la creacion de pulpas de frutas, de esta manera enfrentamos el pasado y tomamos control de nuestras vidas, guiando a nuestras familias a un mejor futuro. Gracias a la donacion realizada por Xiomara es posible tener visibilidad en redes sociales y contar con nuestra pagina web, esto nos permite interactuar rapidamente con nuestros clientes, por eso estamos felices y ahora tenemos ganas de seguir aprendiendo y mejorando nuestra prescencia digital",
  },
  {
    avatar: AVATAR3,
    name: "One vs One",
    link: "https://linktr.ee/onevsone",
    review:
      "Hola soy la administradora de este negocio actualmente manejo toda la prescencia digital y creacion de contenido de One vs One, he seguido mi impulso por aprender y mejorar para administrar este negocio y sobre todo ayudarlo a crecer de manera virtual  ya que muchas veces los recursos para obtener publicidad fisica pueden ser costosos o dificiles de conseguir. Gracias a las redes sociales y la pagina web podemos mostrar contenido y todos nuestros servicios a quien quiera conocer este emprendimiento desde la comodidad de su casa con su celular, tablet o computador, es increible!",
  },
  {
    avatar: AVATAR4,
    name: "Tatan Berzerker Tatto",
    link: "https://linktr.ee/tatanberzerker",
    review:
      "Hola! quiero compartir mi experiencia como tatuador y como las redes sociales han cambiado mi perspectiva, hace algunos años comence como tatuador empirico, he luchado por conseguir clientes y aumentar mis seguidores, fue gracias al acompamiento de Xiomara que he comprendido la facilidad de hacerme notar en redes sociales, admito que aveces resulta complejo entender las redes sociales y paginas web, sin embargo ha sido un proceso con el que he ido aprendiendo y con la ayuda que he recibido comienzo a notar la interaccion de posibles clientes y nuevas solicitudes de tatuajes, donde esto solia ser mucho mas complejo",
  },
  {
    avatar: AVATAR5,
    name: "Mara Hekapoo",
    link: "https://linktr.ee/mara_hekapoo",
    review:
      "Hey... Hola! Soy Xiomara (Mara Hekapoo) mi experiencia con las redes sociales y actualmente como programadora me ha permitido crecer en muchos aspectos, soy una persona en constante aprendizaje y ahora con la programacion puedo visualizarme para ayudar a personas que antes no tenian la posibilidad de hacer notar sus negocios, sobre todo a mujeres que estadisticamente, aunque estan mas presentes en el mundo digital, aun enfrentan desafios de desigualdad. Un ejemplo es la brecha de genero en la conectividad incluyendo la falta de acceso a dispositivos y servicio a internet, por eso espero poder ayudar a fomentar el uso y aprendizaje de habilidades digitales para contribuir a disminuir estas brechas",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Revisión de los clientes</h5>
      <h2>Testimonios</h2>

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, link, review, index }) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <a href={link}>
                <img src={avatar} alt={name} />
              </a>
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
