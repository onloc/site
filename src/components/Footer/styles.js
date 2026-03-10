import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 60px 10%;

  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h4`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 16px;
  color: #ffffff;
`;

export const FooterLink = styled.a`
  display: block;
  color: #cccccc;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;
