import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  color: black;
  font-size: 32px;
  font-weight: normal;
  font-family: "Qubic", sans-serif;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Tab = styled.div`
  padding: 8px 16px;
  border-right: 1px solid #bac8e5;
  font-size: 14px;
  color: #280180;

  &:last-child {
    border-right: none;
  }

  z-index: 100;

  @media (max-width: 768px) {
    border-right: none;
    width: fit-content;
    font-size: 16px;
    &:not(:last-child) {
      border-bottom: 1px solid #bac8e5;
      margin-bottom: 8px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 64px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    order: 1;
    padding: 0px 16px;
  }
`;

export const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const ContentText = styled.p`
  text-align: left;
  font-size: 16px;
  white-space: pre-line;


  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 32px;
  }
`;

export const ContentButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 16px;

  color: white;
  background: linear-gradient(90deg, #014575, #497fa6);
  margin-top: 24px;

  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;

  height: 48px;
  width: 224px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const ContentImage = styled.img`
  width: 50%;
  max-width: 480px;
  height: auto;
  object-fit: contain;
  z-index: 1;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;

export const Block = styled.div`
  width: 80%;
  height: 380px;
  border: 1px solid #497fa69a;
  position: relative;
  margin: 32px auto 16px auto;
  border-radius: 16px;
  max-width: 1280px;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #f7f7f7;
    border-radius: 16px;

    clip-path: polygon(0 0, calc(100% - 70px) 0, 100% 70px, 100% 100%, 0 100%);
  }

  @media (max-width: 768px) {
    margin-bottom: 200px;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-right: 73px solid transparent;
  border-bottom: 73px solid #497fa69a;
  border-radius: 4px;
  right: -1px;
  top: -2px;
  transform: rotate(180deg);

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: -1px;
    width: 0;
    height: 0;
    border-right: 72px solid transparent;
    border-bottom: 72px solid #f7f7f7;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 180px;
  height: 40px;
  background: #497fa69a;
  bottom: 0px;
  right: 120px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 0;
    height: 0;
    width: 178px;
    height: 40px;
    background: #f7f7f7;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  @media (max-width: 1080px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
