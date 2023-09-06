import CuadradoSmall from "@/utils/CuadradoSmall";

import IconsExternal from "@/assets/icons/external_link.svg";

const Enlaces = () => {
  return (
    <>
      <CuadradoSmall
        colorBackground1="#3c3c3c"
        href1="https://github.com/ElNuVaTo"
        alt1="Enlace externo"
        src1={IconsExternal}
        colorBackground2="#3c3c3c"
        href2="https://github.com/ElNuVaTo"
        alt2="Enlace externo"
        src2={IconsExternal}
        colorBackground3="#3c3c3c"
        href3="https://github.com/ElNuVaTo"
        alt3="Enlace externo"
        src3={IconsExternal}
        colorBackground4="#3c3c3c"
        href4="https://github.com/ElNuVaTo"
        alt4="Enlace externo"
        src4={IconsExternal}
      />
    </>
  );
};

export default Enlaces;
