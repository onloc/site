import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 64px 20px;
  margin-bottom: 64px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: auto;
  gap: 2px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  padding: 48px;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const Title = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #1e1e20;
  margin: 0;
`;

export const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #303030;
  margin: 0;
  letter-spacing: 0.4px;
  line-height: 2;

  @media (max-width: 768px) {
    line-height: 1.5;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
