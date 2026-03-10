import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1e1e20;
  color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  gap: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterImage = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  display: block;
`;

export const FooterContent = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 120px;
  padding-top: 120px;
  padding-left: 350px;
  padding-right: 350px;
  width: 1220;
  height: 243;
  justify-content: space-between;

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

export const LogoImage = styled.img`
  width: 208px;
  height: 39px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const FooterCopyright = styled.div`
  background-color: #4c5258;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
`;

export const Dropdown = styled.div`
  position: relative;

  &:hover div {
    display: flex;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 30px;

  background: white;
  border-radius: 6px;

  display: none;
  flex-direction: column;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const DropdownItem = styled.a`
  padding: 10px 20px;
  cursor: pointer;
  color: #333;
  text-decoration: none;

  &:not(:last-child) {
    border-bottom: 1px solid #dae1e5;
  }

  &:hover {
    background: #f5f5f5;
  }
`;

export const InstitutionalLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Cria as duas colunas */
  gap: X 20px; /* Ajuste o primeiro valor se quiser espaço vertical entre as linhas */
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr; /* Volta para uma coluna em telas menores se ficar apertado */
  }
`;
