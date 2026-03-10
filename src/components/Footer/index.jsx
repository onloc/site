import { FooterContainer, SectionTitle, FooterLink } from "./styles";

const Footer = () => (
  <FooterContainer>
    <div>
      <img src="logo.png" alt="On.Loc" />
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
  </FooterContainer>
);

export default Footer;
