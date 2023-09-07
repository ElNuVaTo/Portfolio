import { styled } from "styled-components";

import SobreMi from "@/components/SobreMi/SobreMi";
import Contacto from "@/components/Contacto/Contacto";

import Dominado from "@/components/Habilidades/Dominado";
import Spotify from "@/components/Spotify/Spotify";
import Aprendiendo from "@/components/Habilidades/Aprendiendo";

import Proyectos from "@/components/Proyectos/Proyectos";

import Uno from "@/components/Herramientas/Uno";
import Dos from "@/components/Herramientas/Dos";
import Tres from "@/components/Herramientas/Tres";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  gap: 40px;
`;

const Mobile = () => {
  return (
    <>
      <Main>
        <SobreMi />

        <Contacto />
        <Spotify />

        <Dominado />
        <Aprendiendo />

        <Proyectos />

        <Uno />
        <Dos />
        <Tres />
      </Main>
    </>
  );
};

export default Mobile;
