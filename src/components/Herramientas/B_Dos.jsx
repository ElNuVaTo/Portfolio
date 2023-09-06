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

const B_Dos = () => {
  return (
    <>
      <CuadradoBig colorBackground="#E0E0E0">
        <ID>#2</ID>

        <ContenedorTexto>
          <Titulo>¿Encuentras difícil seleccionar tipografías?</Titulo>

          <CaracteristicasPrincipales>
            <p>🔤 Explora tipografías de Google Fonts.</p>
            <p>📅 Genera combinaciones aleatorias.</p>
            <p>✨ Encuentra inspiración para tu diseño.</p>
          </CaracteristicasPrincipales>
        </ContenedorTexto>

        <Links href="https://fontjoy.com/">https://fontjoy.com/</Links>
      </CuadradoBig>
    </>
  );
};

export default B_Dos;
