import React, { useEffect } from "react";
import {
  FooterContainer,
  SectionTitle,
  FooterLink,
  LogoImage,
  FooterCopyright,
  ImageGrid,
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
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  useEffect(() => {
    // Carrega o script do Behold dinamicamente ao montar o componente
    const d = document;
    if (!d.getElementById("behold-script")) {
      const s = d.createElement("script");
      s.id = "behold-script";
      s.type = "module";
      s.src = "https://w.behold.so/widget.js";
      d.head.append(s);
    }
  }, []);

  return (
    <>
      <FooterContainer>
        <ImageGrid>
          <behold-widget feed-id="gmQlYOwHdxzEaoHXGt8Y"></behold-widget>
        </ImageGrid>

        <FooterContent>
          <div style={{ flex: "1 1 250px", minWidth: 0 }}>
            <LogoImage src={logo} alt="On.Loc" />
            <p>
              A tecnologia não precisa ser complicada. Nem Distante. Nem sua. A
              gente entrega, conecta e transforma.
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
                <SocialIcon src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/on.loc/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/on.loc"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon src={linkedin} alt="Linkedin" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <SocialIcon src={youtube} alt="Youtube" />
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
      </FooterCopyright>
    </>
  );
};

export default Footer;
