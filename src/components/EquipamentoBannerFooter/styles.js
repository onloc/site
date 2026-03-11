import styled from "styled-components";
import bgImage from "../../assets/um-computador-portatil-com-uma-tela-meio-aberta-em-um-fundo-escuro.png";

export const Container = styled.div`
  background-image: url(${bgImage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 300px;
`;

export const Title = styled.h2`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 40px;
  line-height: 125%;
  text-align: center;
  color: #fff;
  margin: 0;
  max-width: 800px;
`;

export const Subtitle = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #fff;
  margin: 0;
  max-width: 600px;
`;
