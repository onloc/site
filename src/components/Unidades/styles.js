import styled from "styled-components";

export const Container = styled.div`
  width: 592px;
  height: 529px;
  top: 580px;
  left: 352px;
  gap: 32px;

  margin: 0 32px 0 0;
`;

export const Title = styled.h1`
  font-family: "Quicksand";
  font-weight: 500;
  font-style: Medium;
  font-size: 40px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #1e1e20;
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #1e1e20;
  text-align: justify;
`;

export const InfoContainer = styled.div`
  width: 592px;
  height: 236px;
  gap: 24px;
`;
export const InfoTitle = styled.h2`
  font-family: "Quicksand";
  font-weight: 700;
  font-style: Bold;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0%;
`;

export const ContactBox = styled.div`
  width: 594px;
  height: 214px;
  gap: 24px;
  margin-top: 16px;
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
  margin-top: 20px;
  margin-right: 20px;
`;

export const ContainerActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  font-size: 24px;
  margin-top: auto;
`;

export const ArrowButton = styled.img`
  cursor: pointer;
`;
