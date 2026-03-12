import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;

  max-width: 100%;
  height: 742px;
  background-color: #014c80;
  border-radius: 16px;
  margin: 0 32px 0 32px;
  padding: 100px 200px 0 200px;
  padding-bottom: 0;

  display: flex;
  justify-content: space-between;
  /* align-items: flex-end; */
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
`;

export const Title = styled.h1`
  font-family: "Quicksand";
  font-weight: 500;
  font-style: Medium;
  font-size: 40px;
  line-height: 125%;
  color: #eff2f3;
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
