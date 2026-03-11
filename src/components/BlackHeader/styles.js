import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.header`
  width: 100%;
  background-color: #000000;
`;

export const Container = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 80px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 16px;
    gap: 10px;
  }
`;

export const Logo = styled.img`
  height: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 15px;
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

  box-shadow: 0 5px 15px rgba(0,0,0,0.15);

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
    border-bottom: 1px solid #DAE1E5;
  }

  &:hover {
    background: #DAE1E5;
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

  width: ${props => (props.open ? "180px" : "0px")};
  opacity: ${props => (props.open ? 1 : 0)};
  overflow: hidden;

  transition: width 0.3s ease, opacity 0.3s ease;
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
    background: rgba(255,255,255,0.1);
  }
`;