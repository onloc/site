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
} from "./styles";

function BlackHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Logo src={logo} alt="logo" />

        <Nav>
          <NavItem>Home</NavItem>
          <Dropdown>
            <NavItem>Equipamentos <img src={ArrowDown} alt="arrow down" /></NavItem>
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
