import { useState, useEffect } from "react";
import Desktop from "../components/Responsive/Desktop";
import Ipad from "../components/Responsive/Ipad";
import Mobile from "../components/Responsive/Mobile";

const InicioPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= 1100 && <Desktop />}
      {windowWidth >= 700 && windowWidth < 1100 && <Ipad />}
      {windowWidth < 700 && <Mobile />}
    </>
  );
};

export default InicioPage;
