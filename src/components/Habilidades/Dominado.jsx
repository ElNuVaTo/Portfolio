import { styled } from "styled-components";

import CuadradoBig from "@/utils/CuadradoBig";

import IconsHtml from "@/assets/icons/icons8-html.svg";
import IconsCss from "@/assets/icons/icons8-css.svg";
import IconsJavaScript from "@/assets/icons/icons8-javascript.svg";
import IconsNextJS from "@/assets/icons/icons8-next.js.svg";
import IconsReact from "@/assets/icons/icons8-reaccionar-nativo.svg";
import IconsGit from "@/assets/icons/icons8-git.svg";

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

const Dominado = () => {
  return (
    <>
      <CuadradoBig colorBackground="#A6FFCB">
        <h2>Dominado</h2>

        <ContenedorIconos>
          <Icono colorBackground="#923f0038">
            <img src={IconsHtml} alt="" />
          </Icono>

          <Icono colorBackground="#0086c954">
            <img src={IconsCss} alt="" />
          </Icono>

          <Icono colorBackground="#c4a7055c">
            <img src={IconsJavaScript} alt="" />
          </Icono>

          <Icono colorBackground="#4295a493">
            <img src={IconsReact} alt="" />
          </Icono>

          <Icono colorBackground="#2b2b2b4c">
            <img src={IconsNextJS} alt="" />
          </Icono>

          <Icono colorBackground="#923f003e">
            <img src={IconsGit} alt="" />
          </Icono>
        </ContenedorIconos>
      </CuadradoBig>
    </>
  );
};

export default Dominado;
