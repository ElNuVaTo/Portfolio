import CuadradoSmall from "@/utils/CuadradoSmall";

import IconsGitHub from "@/assets/icons/logo-github.svg";
import IconsCurriculum from "@/assets/icons/document-attach.svg";
import IconsLinkedin from "@/assets/icons/logo-linkedin.svg";
import IconsWhatSapp from "@/assets/icons/logo-whatsapp.svg";

const Contacto = () => {
  return (
    <>
      <CuadradoSmall
        colorBackground1="#3c3c3c"
        href1="https://github.com/ElNuVaTo"
        alt1="Logo de github"
        src1={IconsGitHub}
        colorBackground2="#b41208"
        href2=""
        alt2="Icono que representa un documento cv"
        src2={IconsCurriculum}
        colorBackground3="#0b67c2"
        href3="https://www.linkedin.com/in/front-end-angelo/"
        alt3="Logo de linkedin"
        src3={IconsLinkedin}
        colorBackground4="#4cc85b"
        href4="https://api.whatsapp.com/send/?phone=56978234940&text&type=phone_number&app_absent=0"
        alt4="Logo de whatsapp"
        src4={IconsWhatSapp}
      />
    </>
  );
};

export default Contacto;
