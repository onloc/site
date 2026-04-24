import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #000000;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const MobileContainer = styled.div`
  @media (max-width: 768px) {
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  max-width: 80rem;
  width: 100%;
  min-height: 80px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px 16px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.img`
  height: 30px;

  @media (max-width: 480px) {
    height: 24px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    background: black;

    flex-direction: column;
    align-items: center;
    padding: ${({ open }) => (open ? "20px 0" : "0")};

    gap: 20px;

    max-height: ${({ open }) => (open ? "500px" : "0")};
    overflow: hidden;

    transition: max-height 0.3s ease;
  }
`;

export const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 480px) {
    display: ${({ open }) => (open ? "block" : "none")};

    font-size: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 30px;
  z-index: 999;

  background: white;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);

  transition: all 0.25s ease;
`;

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
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
    background: #dae1e5;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 32px;
  padding: 8px 16px;

  width: ${(props) => (props.open ? "180px" : "0px")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  overflow: hidden;

  transition:
    width 0.3s ease,
    opacity 0.3s ease;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background: transparent;
`;

export const SearchIcon = styled.img`
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const Button = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 12px 32px;
  border-radius: 32px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  span {
    width: 24px;
    height: 2px;
    background: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
