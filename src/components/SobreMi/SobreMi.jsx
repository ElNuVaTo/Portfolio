import { styled } from "styled-components";

import RectanguloBig from "@/utils/RectanguloBig";

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

const SobreMi = () => {
  return (
    <>
      <RectanguloBig colorBackground="#8AADED">
        <Nombre>Angelo Amaro Alcaino Veloso</Nombre>
        <Puesto>Desarrollador FullStack MERN | MongoDB | Express | React | NodeJS</Puesto>

        <ContenedorDescripcion>
          <Descripcion>
            <strong> ¿Cómo soy como persona? 👀 </strong>
            Me caracterizo por ser una persona tranquila y organizada. Disfruto
            ejercer habilidades de liderazgo ya que encuentro paz en la
            organización. Mantengo una comunicación constante con el equipo para
            garantizar la colaboración efectiva.
          </Descripcion>
          <Descripcion>
            <strong>¿Cómo es mi día a día desarrollando? 💻</strong> Mi enfoque
            se centra en los detalles y las opiniones del equipo, especialmente
            en el lado del frontend. Creo que lo que una persona ve es crucial
            para una empresa, ya que destaca una página web y muestra el nivel
            de esfuerzo invertido.
          </Descripcion>
        </ContenedorDescripcion>
      </RectanguloBig>
    </>
  );
};

export default SobreMi;
