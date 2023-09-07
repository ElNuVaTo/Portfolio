import { styled } from "styled-components";

import RectanguloBig from "@/utils/RectanguloBig";

import IconsExternal from "@/assets/icons/external_link.svg";

const Nombre = styled.h3``;

const Puesto = styled.b`
  font-weight: 600;
`;

const ContenedorDescripcion = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

const Descripcion = styled.p`
  text-align: left;
  display: flex;
  flex-direction: column;
  color: #252525;
  margin: 5px 0;

  strong {
    font-size: 16.5px;
  }
`;

const Image = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: 600;
  background-color: #3c3c3c;
  padding: 5px;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
  }
`;
const Proyectos = () => {
  return (
    <>
      <RectanguloBig colorBackground="#d3e3fb">
        <Nombre>Útopia 🏡</Nombre>
        <Puesto>Proyecto destacado</Puesto>

        <ContenedorDescripcion>
          <Descripcion>
            <strong>¿Por qué una inmobiliaria? 🌆 </strong>
            Elegimos trabajar en una inmobiliaria porque su enfoque claro y
            conocido hacía que el proyecto fuera más manejable. Aunque hay
            muchos ejemplos disponibles, pocos cumplen con mis expectativas.
          </Descripcion>
          <Descripcion>
            <strong>Mi Rol 💼</strong> Tuve la responsabilidad de liderar al
            equipo y planificar las funciones a seguir. En cuanto al desarrollo,
            me encargué del frontend del cliente, asegurándome de que fuera una
            experiencia fluida y atractiva.
          </Descripcion>
        </ContenedorDescripcion>

        <Image href="https://github.com/grupo-de-practica/front-client" target="_blank">
          <img src={IconsExternal} alt="Icono para un enlace externo" />
        </Image>
      </RectanguloBig>
    </>
  );
};

export default Proyectos;
