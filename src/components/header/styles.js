import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #000000;
`;

export const Container = styled.div`
  max-width: 1200px;
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
  gap: 32px;
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    color: #ccc;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
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

  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
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
    background: #f5f5f5;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #497FA6, #014C80);
  color: white;
  border: none;
  padding: 16px 48px;
  border-radius: 32px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;