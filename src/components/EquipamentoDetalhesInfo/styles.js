import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #1e1e20;
`;

export const InfoBox = styled.div`
  min-width: 165px;
  height: 121px;
  opacity: 1;
  gap: 16px;
  border-radius: 8px;
  padding: 32px;
  background-color: #eff2f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: center;
  color: #000;
`;

export const InfoIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const InfoBoxBig = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 272px;
  min-height: 150px;
  width: 292px;
  height: 150px;
  opacity: 1;
  gap: 16px;
  border-radius: 8px;
  padding: 32px 16px;
  background-color: #eff2f3;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoBoxTitle = styled.p`
  font-family: "Quicksand";
  font-weight: 600;
  font-style: SemiBold;
  font-size: 18px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #014c80;
  text-align: left;
`;

export const InfoBoxText = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #000;
  text-align: left;
`;

export const InfoBigBoxIcon = styled.img`
  max-width: 32px;
  max-height: 32px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const NextStepsSection = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;
