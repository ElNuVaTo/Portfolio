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

const A_Uno = () => {
  return (
    <>
      <CuadradoBig colorBackground="#E0E0E0">
        <ID>#1</ID>
        <ContenedorTexto>
          <Titulo>¿No sabes donde empezar en promagacion?</Titulo>
          <CaracteristicasPrincipales>
            <p>🛣️ Explora rutas de aprendizaje en programación.</p>
            <p>📆 Planifica tu desarrollo profesional.</p>
            <p>🔄 Actualiza tus habilidades constantemente.</p>
          </CaracteristicasPrincipales>
        </ContenedorTexto>
        <Links href="https://roadmap.sh/">https://roadmap.sh</Links>
      </CuadradoBig>
    </>
  );
};

export default A_Uno;
