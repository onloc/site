import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #f7f7f7;
`;

export const Slider = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.8s ease;
`;

export const Slide = styled.div`
  width: 100%;
  flex: 0 0 100%;
`;

export const Container = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 128px auto 64px auto;
  gap: 16px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: black;
  font-size: 32px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
`;
