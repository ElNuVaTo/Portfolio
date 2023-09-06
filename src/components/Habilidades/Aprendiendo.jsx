import { styled } from "styled-components";

import CuadradoBig from "@/utils/CuadradoBig";

import IconsFigma from "@/assets/icons/icons8-figma.svg";
import IconsTyperScript from "@/assets/icons/icons8-typescript.svg";
import IconsAws from "@/assets/icons/icons8-amazon-web-services.svg";

const ContenedorIconos = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
`;
const Icono = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.colorBackground};
  border-radius: 5px;
  img {
    height: 40px;
    width: 40px;
  }
`;

const Aprendiendo = () => {
  return (
    <>
      <CuadradoBig colorBackground="#A6FFCB">
        <h2>Aprendiendo</h2>

        <ContenedorIconos>
          <Icono colorBackground="#e5e8ea95">
            <img src={IconsAws} alt="" />
          </Icono>
          
          <Icono colorBackground="#2772be8f">
            <img src={IconsTyperScript} alt="" />
          </Icono>
          
          <Icono colorBackground="#9f2e0c64">
            <img src={IconsFigma} alt="" />
          </Icono>
        </ContenedorIconos>
      </CuadradoBig>
    </>
  );
};

export default Aprendiendo;
