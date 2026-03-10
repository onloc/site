import {
  FooterContainer,
  SectionTitle,
  FooterLink,
  LogoImage,
  FooterCopyright,
  ImageGrid,
  FooterImage,
  FooterContent,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  InstitutionalLinks,
} from "./styles";

import logo from "../../assets/logo-branca.png";

import footer1 from "../../assets/footer/footer1.png";
import footer2 from "../../assets/footer/footer2.png";
import footer3 from "../../assets/footer/footer3.png";
import footer4 from "../../assets/footer/footer4.png";
import footer5 from "../../assets/footer/footer5.png";
import footer6 from "../../assets/footer/footer6.png";
import footer7 from "../../assets/footer/footer7.png";

const footerImages = [
  footer1,
  footer2,
  footer3,
  footer4,
  footer5,
  footer6,
  footer7,
];

const Footer = () => (
  <>
    <FooterContainer>
      <ImageGrid>
        {footerImages.map((imgSrc, index) => (
          <FooterImage key={index} src={imgSrc} alt={`Rodapé ${index + 1}`} />
        ))}
      </ImageGrid>

      <FooterContent>
        <div>
          <LogoImage src={logo} alt="On.Loc" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div>
          <SectionTitle>Institucional</SectionTitle>
          <InstitutionalLinks>
            {/* Coluna 1 */}
            <div>
              <FooterLink href="#">Home</FooterLink>
              <Dropdown>
                <FooterLink href="#">Equipamentos ▾</FooterLink>
                <DropdownMenu>
                  <DropdownItem>Desktop</DropdownItem>
                  <DropdownItem>Minidesks</DropdownItem>
                  <DropdownItem>Notebooks</DropdownItem>
                  <DropdownItem>Servidores</DropdownItem>
                  <DropdownItem>Workstation</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <FooterLink>Soluções ▾</FooterLink>
                <DropdownMenu>
                  <DropdownItem>Desktop</DropdownItem>
                  <DropdownItem>Minidesks</DropdownItem>
                  <DropdownItem>Notebooks</DropdownItem>
                  <DropdownItem>Servidores</DropdownItem>
                  <DropdownItem>Workstation</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <FooterLink href="#">Serviços</FooterLink>
              <FooterLink href="#">Suporte</FooterLink>
            </div>

            {/* Coluna 2 (Onde estava o <br/>) */}
            <div>
              <FooterLink href="#">Quem Somos</FooterLink>
              <FooterLink href="#">Contato</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </div>
          </InstitutionalLinks>
        </div>
        <div>
          <SectionTitle>Contato</SectionTitle>
          <p>Comercial: (19) 3535-9100</p>
          <p>E-mail: contato@onloc.com.br</p>
        </div>
        <div>
          <SectionTitle>Rede Social</SectionTitle>
        </div>
      </FooterContent>
    </FooterContainer>

    <FooterCopyright>
      2025 - Onloc. Todos os direitos reservados. Desenvolvido por Postali
    </FooterCopyright>
  </>
);

export default Footer;
