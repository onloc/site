import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 400px;
  border: 1px solid #497fa69a;
  position: relative;
  margin: 64px auto 16px auto;
  border-radius: 16px;
  max-width: 1280px;

  @media (max-width: 1024px) {
    width: 90%;
    height: 320px;
  }

  @media (max-width: 768px) {
    margin-bottom: 200px;
  }
`;

export const ContainerContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  transform: translateY(-48px);
  gap: 16px;

  @media (max-width: 768px) {
    width: 90%;
    transform: translateY(-16px);
    justify-content: flex-start;
    padding-top: 46px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: black;
  font-size: 32px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;
  letter-spacing: 0.4px @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Block = styled.div`
  width: 70%;
  height: 200px;
  border-radius: 16px;

  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  background: linear-gradient(90deg, #014c80, #256fa6);
  overflow: hidden;

  clip-path: polygon(50px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50px);

  @media (max-width: 1024px) {
    width: 75%;
    height: 170px;
  }

  @media (max-width: 768px) {
    width: 85%;
    flex-direction: column;
    height: 360px;
    bottom: -160px;

    clip-path: polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px);
  }
`;

export const BlockSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 8px;
  flex-direction: column;

  &:not(:last-child) {
    border-right: 1px solid #ffffff;
  }

  @media (max-width: 768px) {
    border-right: none;
    &:not(:last-child) {
      border-bottom: 1px solid #ffffff;
    }
  }
`;

export const Number = styled.span`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.span`
  font-size: 12px;
  margin-top: 4px;
  color: white;
  font-weight: normal;
  letter-spacing: 0.4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
