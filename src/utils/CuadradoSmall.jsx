import { styled } from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 300px;
  gap: 35px;
  position: relative;
`;
const ContenedorCuadrados = styled.div`
  display: flex;
  gap: 35px;
`;
const Cuadrado = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 132px;
  width: 132px;
  border-radius: 10px;
  background-color: ${props => props.colorBackground};
  overflow: hidden;
  text-decoration: none;
`;
const Icono = styled.img`
  height: 35px;
  width: 35px;
`;

const CuadradoSmall = ({
  colorBackground1,
  href1,
  src1,
  alt1,
  colorBackground2,
  href2,
  src2,
  alt2,
  colorBackground3,
  href3,
  src3,
  alt3,
  colorBackground4,
  href4,
  src4,
  alt4,
}) => {
  return (
    <>
      <Contenedor>

        <ContenedorCuadrados>

          <Cuadrado colorBackground={colorBackground1} href={href1} target="_blank">
            <Icono src={src1} alt={alt1} />
          </Cuadrado>

          <Cuadrado colorBackground={colorBackground2} href={href2} target="_blank">
            <Icono src={src2} alt={alt2} />
          </Cuadrado>

        </ContenedorCuadrados>


        <ContenedorCuadrados>

          <Cuadrado colorBackground={colorBackground3} href={href3} target="_blank">
            <Icono src={src3} alt={alt3} />
          </Cuadrado>

          <Cuadrado colorBackground={colorBackground4} href={href4} target="_blank">
            <Icono src={src4} alt={alt4} />
          </Cuadrado>

        </ContenedorCuadrados>

      </Contenedor>
    </>
  );
};

export default CuadradoSmall;
