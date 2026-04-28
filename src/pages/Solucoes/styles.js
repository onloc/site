import styled from "styled-components";
import serviceDeskBanner from "../../assets/service-desk-banner.png";

export const Page = styled.div`
  width: 100%;
`;

export const Content = styled.section`
  padding: 64px 128px;

  @media (max-width: 1024px) {
    padding: 80px 60px;
  }

  @media (max-width: 768px) {
    padding: 48px 24px;
  }
`;

export const TitleContainer = styled.div`
  max-width: 666px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Cards = styled.div`
  max-width: 1216px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bac8e5;
  border-radius: 8px;
  padding: 16px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CardTitle = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const BannerRow = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;

  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BannerImage = styled.img`
  flex: 1;
  width: 100%;
  height: 350px;
  object-fit: cover;

  border-radius: ${(props) =>
    props.variant === "left" ? "0 16px 16px 0" : "16px 0 0 16px"};

  @media (max-width: 768px) {
    border-radius: 16px;
    height: 250px;
  }
`;

export const LeftImage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  height: 450px;
  align-items: flex-end;

  background-image: url(${serviceDeskBanner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  @media (max-width: 768px) {
    padding: 16px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const LeftImagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  width: 80%;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
  }
`;

export const RightBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  height: 450px;
  background-color: #000000;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  @media (max-width: 768px) {
    padding: 16px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const RightImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  width: 80%;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 400px;
  }
`;

export const Title = styled.h2`
  font-family: "Qubic", sans-serif;
  font-size: 40px;
  color: #ffffff;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
