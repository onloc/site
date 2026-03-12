import {
  BodyText,
  Container,
  TextBox,
  Title,
  ContactBox,
  ContactTitle,
  ContactInfo,
  ContactIcon,
  LeftContent,
} from "./styles";

import Call from "../../assets/call-white.png";
import Location from "../../assets/location-white.png";
import Mail from "../../assets/mail-white.png";

import Form from "../Form";

const FormContainer = () => {
  return (
    <Container>
        <LeftContent>
      <TextBox>
        <Title>Saiba mais sobre nossas soluções para sua Empresa.</Title>
        <br />
        <BodyText>
          Desejamos auxiliá-lo na resolução dos desafios relacionados à gestão
          de equipamentos de TI, facilitando seu cotidiano. Podemos conversar?
        </BodyText>
      </TextBox>

      <ContactBox>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <ContactIcon src={Location} alt="Localização" />
          <div>
            <ContactTitle>Localização</ContactTitle>
            <ContactInfo>
              Av. 70A, 1185 - Rio Claro - SP - Brasil - CEP: 13506-450
            </ContactInfo>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <ContactIcon src={Call} alt="Telefone" />
          <div>
            <ContactTitle>Atendimento</ContactTitle>
            <ContactInfo>+55 19 3536-9100</ContactInfo>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <ContactIcon src={Mail} alt="E-mail" />
          <div>
            <ContactTitle>E-mail</ContactTitle>
            <ContactInfo>vendas@cafmaquinas.com.br</ContactInfo>
          </div>
        </div>
      </ContactBox>
      </LeftContent>
      <Form/>
    </Container>
  );
};

export default FormContainer;
