import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #000000;
`;

export const Container = styled.div`
  max-width: 80rem;
  height: 80px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  height: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #ccc;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 30px;

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