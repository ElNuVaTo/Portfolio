import { useEffect, useRef } from "react";
import { styled } from "styled-components";

import CuadradoBig from "@/utils/CuadradoBig";

import MelodiaMP4 from "@/assets/sound/Melodia.mp4";
import GitHubWalpapper from "@/assets/images/GitHub.jpg";

const Perfil = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

const Reproductor = styled.audio`
  width: 100%;
  margin: 35px 0 0 0;

  /* Estilos para el elemento source dentro de audio */
  & > source {
    /* Tus estilos para source aquí */
    border-radius: 0;
  }
`;

const Spotify = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Función para reproducir el archivo de audio
    const reproducirAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    // Llama a la función para reproducir el audio cuando el componente se monta
    reproducirAudio();
  }, []);

  return (
    <>
      <CuadradoBig colorBackground="#1fd660">
        <Perfil src={GitHubWalpapper} alt="Perfil de github de ElNuVaTo" />

        <Reproductor ref={audioRef} controls>
          <source src={MelodiaMP4} type="audio/mp4" />
          Tu navegador no admite el elemento de audio.
        </Reproductor>
      </CuadradoBig>
    </>
  );
};

export default Spotify;
