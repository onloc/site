import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 90vh;

  background: ${(props) =>
    props.$bannerImage
      ? `url(${props.$bannerImage})`
      : props.$backgroundColor || "#000"};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0 2%;
  }
`;

export const BannerContent = styled.div`
  color: ${(props) => props.$textColor || "white"};
  max-width: 32%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: -5%;
  order: 3;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 16px;
    margin-right: 0;
  }
`;

export const BannerSideImage = styled.img`
  width: 45%;
  height: auto;
  order: 1;

  @media (max-width: 768px) {
    width: 60%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 32px;
  margin: 0;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

export const BannerButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 16px;
  font-weight: bold;

  color: ${(props) => props.$buttonStyle?.color || "#3c54a4"};
  background: ${(props) =>
    props.$buttonStyle?.background ||
    "linear-gradient(90deg, #FFFFFF, #CDEAFF)"};

  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;

  width: fit-content;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0.6rem 1.5rem;
    width: 100%;
  }
`;

export const BannerSubtitle = styled.p`
  font-size: 16px;
  margin: 0;
  width: 85%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BannerCornerText = styled.span`
  position: absolute;
  bottom: 40px;
  left: 120px;

  font-size: 20px;
  font-weight: 500;
  opacity: 0.6;
  font-family: "Qubic Grid", sans-serif;
  color: ${(props) => props.$textColor || "white"};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BannerIconsContainer = styled.div`
  width: 36px;
  height: 72px;
  position: absolute;
  top: 45%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  order: 2;

  @media (max-width: 768px) {
    position: static;

    flex-direction: row;

    width: 100%;
    height: 36px;
  }
`;

export const BannerIcon = styled.img`
  width: 36px;
  height: 36px;

  ${(props) => props.$rotate && `transform: rotate(${props.$rotate});`}
`;