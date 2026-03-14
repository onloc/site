import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 295px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;

  border-radius: 16px;
  border: 1px solid var(--Tons-de-Cinza-Cinza-Medio-2, #bac8e5);
`;

export const Content = styled.div`
  width: 100%;
  text-align: left;
  gap: 16px;
`;

export const CardTitle = styled.h3`
  color: var(--Mono-Black, #000);

  font-family: Quicksand;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
`;

export const Description = styled.p`
  overflow: hidden;
  color: var(--Tons-de-Cinza-Cinza-Escuro-1, #4c5258);
  text-overflow: ellipsis;
  /* white-space: nowrap; */

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

export const Image = styled.img`
  width: 231px;
  height: 193px;

  border-radius: 16px;

  margin: 16px 0;
`;

export const Date = styled.p`
  color: var(--Tons-de-Cinza-Cinza-Escuro-1, #4c5258);

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

export const Author = styled.p`
  color: var(--Mono-Black, #000);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const Chip = styled.div`
  display: flex;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  border: 1px solid var(--Tons-de-Cinza-Cinza-Medio-2, #bac8e5);
`;
