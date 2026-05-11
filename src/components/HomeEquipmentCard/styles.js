import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  padding-top: 160px;

  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  text-align: left;
  min-height: 264px;
  padding: 16px 24px;
  padding-top: 48px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid #bac8e5;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.4px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  letter-spacing: 0.4px;
`;

export const CardButton = styled.button`
  background: linear-gradient(90deg, #014575, #497fa6);
  color: white;
  border: none;
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 0;
  letter-spacing: 0.4px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;

  position: absolute;
  left: 50%;

  transform: translateX(-50%);
  top: 0px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
`;

export const TopImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
`;
