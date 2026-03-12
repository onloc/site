import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;

export const Container = styled.div`
  width: 660px;
  height: hug-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 175px;
  margin-bottom:175px ;
`;

export const Typography = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-style: Medium;
  font-size: 40px;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: center;
  color: #014c80;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const FilterItem = styled.div`
  width: 100px;
  height: 100px;
  background: #eff2f3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  border: 1px solid ${(props) => (props.$isSelected ? "#014c80" : "transparent")};

  &:hover {
    border: 1px solid #014c80;
  }
`;

export const FilterImage = styled.img`
  max-width: 75px;
  max-height: 75px;
  object-fit: contain;
`;

export const FilterTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-align: center;
  transition: 0.3s;

  color: ${(props) => (props.$isSelected ? "#014c80" : "#0e1017")};
  font-weight: ${(props) => (props.$isSelected ? "700" : "400")};
`;
