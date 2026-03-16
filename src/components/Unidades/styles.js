import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 592px;
  min-height: 529px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    height: auto;
    margin-bottom: 32px;
  }
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
  display: flex;
  flex-direction: column;
  max-width: 592px;
  min-height: 236px;
  gap: 24px;
  padding: 24px 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
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
  max-width: 594px;
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
  width: 30px;
  height: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 10px;
  }
`;
