import styled from "styled-components";

import patern from "../../assets/circlepatern.png";

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

export const SoftwareContainer = styled.div`
  width: 100%;
  max-width: 1217px;
  min-height: 572px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border-radius: 20px;
  background: #1f1f1f;
  position: relative;
  overflow: hidden;
`;

export const SoftwareContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
  max-width: 801px;
  gap: 16px;

  padding-top: 120px;

  flex: 1;
`;

export const SoftwarePatern = styled.img.attrs({
  src: patern,
  alt: "Pattern",
})`
  width: 358px;
  height: 358px;
  object-fit: contain;

  bottom: 0;
  margin: 0;

  transform: translateY(25%);

  border: none;
`;
