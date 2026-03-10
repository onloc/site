import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #333;
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
  height: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
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
  gap: 20px;
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