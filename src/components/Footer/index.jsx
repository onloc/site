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
  Contacts,
  ContactTypography,
  ContactLinkInline,
  SocialContainer,
  SocialIcon,
  BrandLink,
} from "./styles";

import logo from "../../assets/logo-branca.png";

import footer1 from "../../assets/footer/footer1.png";
import footer2 from "../../assets/footer/footer2.png";
import footer3 from "../../assets/footer/footer3.png";
import footer4 from "../../assets/footer/footer4.png";
import footer5 from "../../assets/footer/footer5.png";
import footer6 from "../../assets/footer/footer6.png";
import footer7 from "../../assets/footer/footer7.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";

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
        <div style={{ flex: "1 1 250px", minWidth: 0 }}>
          <LogoImage src={logo} alt="On.Loc" />
          <p>
            A tecnologia não precisa ser complicada. Nem Distante. Nem sua. A
            gente entrega, conecta e transforma.{" "}
          </p>
        </div>
        <div>
          <SectionTitle>Institucional</SectionTitle>
          <InstitutionalLinks>
            <div>
              <FooterLink to="/">Home</FooterLink>
              <Dropdown>
                <FooterLink to="/equipamentos">Equipamentos ▾</FooterLink>
                <DropdownMenu>
                  <DropdownItem>Desktop</DropdownItem>
                  <DropdownItem>Minidesks</DropdownItem>
                  <DropdownItem>Notebooks</DropdownItem>
                  <DropdownItem>Servidores</DropdownItem>
                  <DropdownItem>Workstation</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownMenu>
                  <DropdownItem>Desktop</DropdownItem>
                  <DropdownItem>Minidesks</DropdownItem>
                  <DropdownItem>Notebooks</DropdownItem>
                  <DropdownItem>Servidores</DropdownItem>
                  <DropdownItem>Workstation</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <FooterLink to="/Suporte">Suporte</FooterLink>
              <FooterLink to="/duvidas">Dúvidas</FooterLink>
            </div>
            <div>
              <FooterLink to="/quem-somos">Quem Somos</FooterLink>
              <FooterLink to="/contato">Contato</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/politica-de-privacidade">
                Política de Privacidade
              </FooterLink>
              <FooterLink to="/termo-de-uso">Termo de Uso</FooterLink>
            </div>
          </InstitutionalLinks>
        </div>
        <Contacts>
          <SectionTitle>Contato</SectionTitle>

          <ContactTypography>
            Comercial:{" "}
            <ContactLinkInline href="tel:1930236697">
              (19) 3023-6697
            </ContactLinkInline>
          </ContactTypography>

          <ContactTypography>
            Suporte Técnico:{" "}
            <ContactLinkInline href="tel:19984573320">
              (19) 98457-3320
            </ContactLinkInline>
          </ContactTypography>

          <ContactTypography>
            Financeiro:{" "}
            <ContactLinkInline href="tel:19983590028">
              (19) 98359-0028
            </ContactLinkInline>
          </ContactTypography>

          <ContactTypography>
            E-mail:{" "}
            <ContactLinkInline href="mailto:contato@onloc.com.br">
              contato@onloc.com.br
            </ContactLinkInline>
          </ContactTypography>

          <ContactTypography style={{ fontSize: "15px" }}>
            Segunda a Sexta das 08h as 12h e 13h15 as 18h
          </ContactTypography>
        </Contacts>
        <div>
          <SectionTitle>Rede Social</SectionTitle>
          <SocialContainer>
            <a
              href="https://www.facebook.com/onloc.brasil/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon src={facebook} alt="Rede Social 1" />
            </a>
            <a href="https://www.instagram.com/on.loc/" target="_blank" rel="noreferrer">
              <SocialIcon src={instagram} alt="Rede Social 2" />
            </a>
            <a href="https://www.linkedin.com/company/on.loc?originalSubdomain=br" target="_blank" rel="noreferrer">
              <SocialIcon src={linkedin} alt="Rede Social 3" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <SocialIcon src={youtube} alt="Rede Social 4" />
            </a>
          </SocialContainer>
        </div>
      </FooterContent>
    </FooterContainer>

    <FooterCopyright>
      <span>
        2025 - <BrandLink href="#">Onloc.</BrandLink> Todos os direitos
        reservados.
      </span>
      {/* <span>
        Desenvolvido por{" "}
        <BrandLink
          href="https://postali.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Postali
        </BrandLink>
      </span> */}
    </FooterCopyright>
  </>
);

export default Footer;
