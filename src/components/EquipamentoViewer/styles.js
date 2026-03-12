import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 40px;
  padding: 100px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 592px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 592px;
  height: 592px;
  cursor: crosshair;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #bac8e5;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ZoomLens = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 200%;
  pointer-events: none;
`;

export const ImageCarrousel = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const Thumb = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid ${(props) => (props.$active ? "#014c80" : "#bac8e5")};
  transition: border 0.3s ease;
`;

export const RightColumn = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 40px;
  color: #1e1e20;
`;

export const Description = styled.div`
  font-family: "Montserrat";
  font-size: 16px;
  color: #0e1017;
`;

export const Button = styled.button`
  margin-top: 25px;
  padding: 16px 56px;
  border-radius: 47px;
  border: 1px solid #000;
  background: transparent;
  cursor: pointer;
  &:hover {
    background: #0e1017;
    color: #eee9e9;
  }
`;

export const MainButton = styled(Button)`
  width: 100%;
  background: linear-gradient(90deg, #014c80 0%, #497fa6 100%);
  color: white;
  border: none;
`;

export const ButtonGroupTitle = styled.h1`
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  
  font-family: "Lato";
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0%;

  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #014c80;
    border-radius: 50%;
    margin-right: 12px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
