import { styled } from "styled-components";

const Section = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  background-color: white;
  background-color: ${(props) => props.colorBackground};
  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const CuadradoBig = ({ colorBackground, children }) => {
  return (
    <>
      <Section colorBackground={colorBackground}>{children}</Section>
    </>
  );
};

export default CuadradoBig;
