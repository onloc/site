import logo from "../../assets/logo-branca.png";
import { Wrapper, Container, Logo, Nav, NavItem, Actions, Button } from "./styles";

function Header() {
  return (
    <Wrapper>
      <Container>

        <Logo src={logo} alt="logo" />

        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Equipamentos</NavItem>
          <NavItem>Quem Somos</NavItem>
          <NavItem>Soluções</NavItem>
          <NavItem>Suporte</NavItem>
          <NavItem>Dúvidas</NavItem>
          <NavItem>Contato</NavItem>
        </Nav>

        <Actions>
          <Button>Quero alugar</Button>
        </Actions>

      </Container>
    </Wrapper>
  );
}

export default Header;