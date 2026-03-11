import styled from "styled-components";

export const Container = styled.div`
  width: 295px;
  height: 444px;
  gap: 16px;
  opacity: 1;
  border: solid #bac8e5;
  border-radius: 16px;
  border-width: 1px;
  padding: 32px;
`;

export const Image = styled.img`
  width: 231px;
  height: 193px;
  object-fit: cover;
`;

export const Title = styled.div`
  margin-bottom: 16px;
  font-family: "Quicksand";
  font-weight: 500;
  font-style: Medium;
  font-size: 22px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #000;
`;

export const Description = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0%;
  color: #4c5258;
`;

export const Button = styled.button`
  margin-top: 25px;
  width: 239;
  height: 45;
  gap: 8px;
  opacity: 1;
  border-radius: 47px;
  padding-top: 16px;
  padding-right: 56px;
  padding-bottom: 16px;
  padding-left: 56px;
  background: linear-gradient(90deg, #014c80 0%, #497fa6 100%);
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background: #0e1017;
    color: #eee9e9;
  }
`;
