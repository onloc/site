import styled from "styled-components";
import bgImage from "../../assets/retangle-banner.png";

export const Container = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 300px;

  position: relative;
`;

export const Title = styled.h2`
  font-family: Quicksand;
  font-weight: 500;
  font-style: Medium;
  font-size: 48px;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: center;
  color: #fff;
`;
