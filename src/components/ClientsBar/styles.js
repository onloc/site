import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 400px;
  background: black;
  margin-bottom: 64px;
`;

export const Container = styled.div`
  width: 60%;
  height: 100%;
  margin: 32px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    gap: 64px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 24px;
  }
}
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 65%;
  overflow: hidden;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 80%,
    transparent 100%
  );

  -webkit-mask-image: linear-gradient(
    to left,
    transparent 0%,
    black 50%,
    black 50%,
    transparent 110%
  );

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.4;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const MainLogo = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100px;
  }
`;
