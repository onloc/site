import React, { useState } from "react";
import {
  Container,
  Title,
  Description,
  InfoContainer,
  InfoTitle,
  ContactBox,
  ContactIcon,
  ContactInfo,
  ContactTitle,
  ContainerActions,
  ArrowButton,
  Wrapper,
} from "./styles";

import ButtonComponent from "../ButtonComponent";
import Call from "../../assets/call.png";
import Location from "../../assets/location.png";
import Mail from "../../assets/mail.png";
import ArrowLeft from "../../assets/arrow-button-left.png";
import ArrowRight from "../../assets/arrow-button-right.png";
import ArrowBlueLeft from "../../assets/arrow-button-blue-left.png";
import ArrowBlueRight from "../../assets/arrow-button-blue-right.png";

const Unidades = () => {
  const [cidadeIndex, setCidadeIndex] = useState(0);
  const [lojaIndex, setLojaIndex] = useState(0);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const unidades = [
    {
      name: "Rio Claro",
      unitys: [
        {
          name: "Matriz",
          location: "Quatro, nº1544 - Vila Operaria, Rio Claro - SP",
          phone: "+55 (19) 3023-6697",
          email: "contato@onloc.com.br",
        },
      ],
    },
    {
      name: "Campinas",
      unitys: [
        {
          name: "Filial Campinas",
          location:
            "Rua Barão de Paranapanema, nº 46, sala 21, Bosque, Campinas/SP",
          phone: "+55 (19) 3023-6697",
          email: "contato@onloc.com.br",
        },
      ],
    },
    {
      name: "Piracicaba",
      unitys: [
        {
          name: "Filial Piracicaba",
          location:
            "Rua Alfredo Guedes, nº 937, sala 05 - Alto, Piracicaba - SP",
          phone: "+55 (19) 3023-6697",
          email: "contato@onloc.com.br",
        },
      ],
    },
  ];

  const cidadeAtiva = unidades[cidadeIndex];
  const lojaAtiva = cidadeAtiva.unitys[lojaIndex];

  const mudarCidade = (index) => {
    setCidadeIndex(index);
    setLojaIndex(0);
  };

  const navegarLoja = (direcao) => {
    const totalLojas = cidadeAtiva.unitys.length;
    if (direcao === "proxima") {
      setLojaIndex((prev) => (prev + 1) % totalLojas);
    } else {
      setLojaIndex((prev) => (prev - 1 + totalLojas) % totalLojas);
    }
  };

  return (
    <Container>
      <Title>Unidades Onloc perto de você</Title>
      <br />
      <Description>
        Encontre a unidade Onloc mais próxima e conte com um atendimento
        especializado, estrutura moderna e serviços de qualidade pensados para
        facilitar o seu dia a dia.
      </Description>

      <Wrapper>
        {unidades.map((cidade, index) => (
          <div
            key={cidade.name}
            onClick={() => mudarCidade(index)}
            style={{ cursor: "pointer" }}
          >
            <ButtonComponent
              key={cidade.name}
              variant={cidadeIndex === index ? "blue" : "white"}
              text={cidade.name}
              minWidth="150px"
            />
          </div>
        ))}
      </Wrapper>

      <InfoContainer>
        <InfoTitle>{lojaAtiva.name}</InfoTitle>
        <ContactBox>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <ContactIcon src={Location} alt="Localização" />
            <div>
              <ContactTitle>Localização</ContactTitle>
              <ContactInfo>{lojaAtiva.location}</ContactInfo>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <ContactIcon src={Call} alt="Telefone" />
            <div>
              <ContactTitle>Atendimento</ContactTitle>
              <ContactInfo>{lojaAtiva.phone}</ContactInfo>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <ContactIcon src={Mail} alt="E-mail" />
            <div>
              <ContactTitle>E-mail</ContactTitle>
              <ContactInfo>{lojaAtiva.email}</ContactInfo>
            </div>
          </div>
        </ContactBox>

        <ContainerActions>
          <ArrowButton
            src={isHoveredLeft ? ArrowBlueLeft : ArrowLeft}
            alt="Anterior"
            onClick={() => navegarLoja("anterior")}
            onMouseEnter={() => setIsHoveredLeft(true)}
            onMouseLeave={() => setIsHoveredLeft(false)}
          />
          <ArrowButton
            src={isHoveredRight ? ArrowBlueRight : ArrowRight}
            alt="Próxima"
            onClick={() => navegarLoja("proxima")}
            onMouseEnter={() => setIsHoveredRight(true)}
            onMouseLeave={() => setIsHoveredRight(false)}
          />
        </ContainerActions>
      </InfoContainer>
    </Container>
  );
};

export default Unidades;
