/* eslint-disable react-refresh/only-export-components */
import { styled } from "styled-components";

import CuadradoBig from "@/utils/CuadradoBig";

const ID = styled.b`
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-weight: 600;
`;

const ContenedorTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
const Links = styled.a`
  color: black;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;
const Titulo = styled.b`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 18px;
`;
const CaracteristicasPrincipales = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  p {
    text-align: left;
  }
`;

const C_Tres = () => {
  return (
    <>
      <CuadradoBig colorBackground="#E0E0E0">
        <ID>#3</ID>

        <ContenedorTexto>
          <Titulo>¿Quieres crear paletas de colores asombrosas?</Titulo>

          <CaracteristicasPrincipales>
            <p>🌈 Explora paletas de colores creativas.</p>
            <p>🎨 Crea tus propias combinaciones.</p>
            <p>📊 Analiza tendencias de colores.</p>
          </CaracteristicasPrincipales>
        </ContenedorTexto>

        <Links href="https://color.adobe.com/es/create/color-wheel">
          https://color.adobe.com/es
        </Links>
      </CuadradoBig>
    </>
  );
};

export default C_Tres;
