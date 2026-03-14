import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 700px;
  background-color: #014c80;
  padding: 100px 200px 0 200px;
  padding-bottom: 0;

  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
      margin: 16px auto;
      width: 90%;
      padding: 16px ;
      height: auto;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 594px;
`;

export const TextBox = styled.div`
  width: 594px;
  gap: 16px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h1`
  font-family: "Quicksand";
  font-weight: 500;
  font-style: Medium;
  font-size: 40px;
  line-height: 125%;
  color: #eff2f3;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const BodyText = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 125%;
  color: #ffffff;
`;

export const ContactBox = styled.div`
  width: 594px;
  height: 214px;
  gap: 32px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const ContactTitle = styled.h1`
  font-family: "Inter";
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 159%;
`;

export const ContactInfo = styled.p`
  font-family: "Inter";
  font-weight: 200;
  font-style: Regular;
  font-size: 16px;
  line-height: 159%;

  margin: 0 0 25px;
`;

export const ContactIcon = styled.img`
  top: 13px;
  margin-top: 10px;
  margin-right: 10px;
`;
