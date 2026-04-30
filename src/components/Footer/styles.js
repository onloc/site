import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #1e1e20;
  color: #ffffff;
`;

export const ImageGrid = styled.div`
  width: 100%;
`;

export const FooterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 40px;
  padding: 120px 0;
  width: 80%;
  min-height: 480px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h4`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #a4c8de;
  margin-bottom: 24px;
`;

export const FooterLink = styled(Link)`
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
  width: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Contacts = styled.div`
  width: 351px;
  height: 195px;
  gap: 24px;
`;

export const ContactLinkInline = styled.a`
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #cccccc;
  }
`;

export const ContactTypography = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  margin-bottom: 8px;
  color: #ffffff;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterCopyright = styled.div`
  background-color: #4c5258;
  width: 100%;
  padding: 20px 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0%;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

export const BrandLink = styled.a`
  color: #a4c8de;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
