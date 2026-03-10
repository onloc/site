import {
  FooterContainer,
  SectionTitle,
  FooterLink,
  LogoImage,
  FooterCopyright,
} from "./styles";
import logo from "../../assets/logo-branca.png";

const Footer = () => (
  <FooterContainer>
    <div>
      <LogoImage src={logo} alt="On.Loc" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div>
      <SectionTitle>Institucional</SectionTitle>
      <FooterLink href="#">Home</FooterLink>
      <FooterLink href="#">Equipamentos</FooterLink>
    </div>
    <div>
      <SectionTitle>Contato</SectionTitle>
      <p>Comercial: (19) 3535-9100</p>
      <p>E-mail: contato@onloc.com.br</p>
    </div>
    <div>
      <SectionTitle>Rede Social</SectionTitle>
    </div>
    <FooterCopyright/>
    2025 - Onloc. Todos os direitos reservados. Desenovolvido por Postali
  </FooterContainer>
);

export default Footer;
