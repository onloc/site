import logo from "../../assets/logo-branca.png";
import Search from "../../assets/icone-lupa.png";
import {
  Wrapper,
  Container,
  Logo,
  Nav,
  NavItem,
  Actions,
  Button,
  DropdownMenu,
  Dropdown,
  DropdownItem,
} from "./styles";

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo src={logo} alt="logo" />

        <Nav>
          <NavItem>Home</NavItem>
          <Dropdown>
            <NavItem>Equipamentos ▾</NavItem>

            <DropdownMenu>
              <DropdownItem>Desktop</DropdownItem>
              <DropdownItem>Minidesks</DropdownItem>
              <DropdownItem>Notebooks</DropdownItem>
              <DropdownItem>Servidores</DropdownItem>
              <DropdownItem>Workstation</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>Quem Somos</NavItem>
          <NavItem>Soluções</NavItem>
          <NavItem>Suporte</NavItem>
          <NavItem>Dúvidas</NavItem>
          <NavItem>Contato</NavItem>
        </Nav>

        <Actions>
          <img src={Search} alt="buscar" />
          <Button>Quero alugar</Button>
        </Actions>
      </Container>
    </Wrapper>
  );
}

export default Header;
