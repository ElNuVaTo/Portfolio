import { styled } from "styled-components";

import SobreMi from "@/components/SobreMi/SobreMi";
import Contacto from "@/components/Contacto/Contacto";

import Dominado from "@/components/Habilidades/Dominado";
import Spotify from "@/components/Spotify/Spotify";
import Aprendiendo from "@/components/Habilidades/Aprendiendo";

import Proyectos from "@/components/Proyectos/Proyectos";
import Enlaces from "@/components/Proyectos/Enlaces";

import Uno from "@/components/Herramientas/Uno";
import Dos from "@/components/Herramientas/Dos";
import Tres from "@/components/Herramientas/Tres";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 35px;
  gap: 40px;
`;
const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
const ContenedorContactoSpotify = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
const SpotifyAndSkills = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
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
`;

const Ipad = () => {
  return (
    <>
      <Main>
        <AboutMe>
          <SobreMi />
        </AboutMe>

        <ContenedorContactoSpotify>
          <Contacto />
          <Spotify />
        </ContenedorContactoSpotify>

        <SpotifyAndSkills>
          <Dominado />
          <Aprendiendo />
        </SpotifyAndSkills>

        <ProyectosAndEnlaces>
          <Proyectos />
        </ProyectosAndEnlaces>

        <Herramientas>
          <Enlaces />
          <Uno />
        </Herramientas>

        <Herramientas>
          <Dos />
          <Tres />
        </Herramientas>
      </Main>
    </>
  );
};

export default Ipad;
