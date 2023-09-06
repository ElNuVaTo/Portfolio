import { styled } from "styled-components";

import SobreMi from "@/components/SobreMi/SobreMi";
import Contacto from "@/components/Contacto/Contacto";

import Dominado from "@/components/Habilidades/Dominado";
import Spotify from "@/components/Spotify/Spotify";
import Aprendiendo from "@/components/Habilidades/Aprendiendo";

import Proyectos from "@/components/Proyectos/Proyectos";
import A_Uno from "@/components/Herramientas/a_Uno";
import B_Dos from "@/components/Herramientas/B_Dos";
import C_Tres from "@/components/Herramientas/C_Tres";
import Enlaces from "@/components/Proyectos/Enlaces";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 35px;
  gap: 35px;
`;
const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
const SpotifyAndSkills = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
const ProyectosAndEnlaces = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: 40px;
`;

const Herramientas = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const InicioPage = () => {
  return (
    <>
      <Main>
        <AboutMe>
          <SobreMi />
          <Contacto />
        </AboutMe>

        <SpotifyAndSkills>
          <Spotify />
          <Dominado />
          <Aprendiendo />
        </SpotifyAndSkills>

        <ProyectosAndEnlaces>
          <Enlaces/>
          <Proyectos />
        </ProyectosAndEnlaces>

        <Herramientas>
          <A_Uno />
          <B_Dos />
          <C_Tres />
        </Herramientas>
      </Main>
    </>
  );
};

export default InicioPage;
