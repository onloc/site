import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  background-color: white;
  height: 100%;
  width: 100%;
  margin-bottom: 64px;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 64px auto;
  max-width: 1280px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 32px auto;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 32px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 16px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  text-align: left;
  color: black;
  font-size: 32px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  text-align: left;
  color: black;
  font-size: 24px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  text-align: left;
  color: black;
  font-size: 16px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.4px;
`;

export const Block = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  display: ${(props) => (props.$display ? "block" : "none")};

  @media (max-width: 768px) {
    display: ${(props) => (props.$display ? "none" : "block")};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Block2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageText = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 3px;
`;

export const Button = styled.button`
  font-size: 16px;
  letter-spacing: 0.4px;
  color: white;
  background: linear-gradient(90deg, #014c80 0%, #497fa6 100%);

  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;

  justify-self: center;

  width: 200px;
  min-height: 48px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    width: 180px;
    min-height: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
