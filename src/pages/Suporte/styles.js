import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
`;

export const Intro = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin: 120px auto;
  padding: 0 20px;

  max-width: 1280px;

  @media (max-width: 768px) {
    margin: 80px auto;
  }
`;

export const CardsSection = styled.section`
  display: flex;
  gap: 32px;

  padding: 0 20px;
  max-width: 1280px;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SoftwareSection = styled.section`
  margin: 64px auto;
  padding: 0 20px;

  display: flex;
  justify-content: center;

  max-width: 1280px;

  @media (max-width: 768px) {
    margin: 32px auto;
    padding: 0;
  }
`;

export const SoftwareImage = styled.img`
  width: 100%;
  max-width: 1280px;
  height: auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LinkText = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;
