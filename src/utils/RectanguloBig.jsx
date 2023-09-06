import { styled } from "styled-components";

const Cuadrado = styled.div`
  width: 100%;
  max-width: calc(600px + 40px);
  height: 300px;
  background-color: ${props => props.colorBackground};
  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const RectanguloBig = ({ colorBackground, children }) => { 
  return (
    <>
      <Cuadrado colorBackground={colorBackground}>{children}</Cuadrado> 
    </>
  );
};

export default RectanguloBig;
