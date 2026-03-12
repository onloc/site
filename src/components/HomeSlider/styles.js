import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 24px;
  transition: transform 0.4s ease;
`;

export const SliderViewport = styled.div`
  width: 100%;
  max-width: 1280px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 960px;
  }

  @media (max-width: 768px) {
    max-width: 640px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
  }
`;

export const Arrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  width: 20%;
  margin: 16px auto;
  gap: 16px;
  justify-content: center;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  height: 100%;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#3C54A4" : "#838B92")};
  cursor: pointer;
  transition: 0.3s;
`;