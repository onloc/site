import { useState } from "react";
import logo from "../../assets/logo-branca.png";
import WhiteSearchIcon from "../../assets/icone-lupa-branca.png";
import BlueSearchIcon from "../../assets/icone-lupa-azul.png";
import ArrowDown from "../../assets/arrow-down-blue.png";
import ArrowUp from "../../assets/arrow-up-blue.png";

import {
  Wrapper,
  Container,
  Logo,
  Nav,
  NavItem,
  Actions,
  Button,
  SearchBox,
  SearchInput,
  SearchIcon,
  SearchContainer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Hamburger,
  MobileContainer,
} from "./styles";
import { Link } from "react-router-dom";

function BlackHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <MobileContainer>
          <Logo src={logo} alt="logo" />

          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </MobileContainer>

        <Nav open={menuOpen}>
          <NavItem open={menuOpen} to="/">
            Home
          </NavItem>
          <Dropdown>
            <NavItem open={menuOpen} to="/equipamentos">
              Equipamentos
              <img src={ArrowDown} alt="arrow down" />
            </NavItem>
            <DropdownMenu>
              <DropdownItem>Desktop</DropdownItem>
              <DropdownItem>Minidesks</DropdownItem>
              <DropdownItem>Notebooks</DropdownItem>
              <DropdownItem>Servidores</DropdownItem>
              <DropdownItem>Workstation</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem open={menuOpen} to="/quem-somos">
            Quem Somos
          </NavItem>
          <NavItem open={menuOpen} to="/solucoes">
            Soluções
          </NavItem>
          <NavItem open={menuOpen} to="/suporte">
            Suporte
          </NavItem>
          <NavItem open={menuOpen} to="/duvidas">
            Dúvidas
          </NavItem>
          <NavItem open={menuOpen} to="/contato">
            Contato
          </NavItem>
        </Nav>

        <Actions>
          <SearchContainer open={searchOpen}>
            <SearchBox open={searchOpen}>
              <SearchInput placeholder="Buscar..." />
              <SearchIcon
                src={searchOpen ? BlueSearchIcon : WhiteSearchIcon}
                onClick={() => setSearchOpen((prev) => !prev)}
              />
            </SearchBox>

            {!searchOpen && (
              <SearchIcon
                src={searchOpen ? BlueSearchIcon : WhiteSearchIcon}
                onClick={() => setSearchOpen((prev) => !prev)}
              />
            )}
          </SearchContainer>
          <Button>Suporte Técnico</Button>
        </Actions>
      </Container>
    </Wrapper>
  );
}

export default BlackHeader;
