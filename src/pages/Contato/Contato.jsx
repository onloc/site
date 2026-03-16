import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import HeaderBanner from "../../components/HeaderBanner";

import bgImage from "../../assets/contato-banner.png";
import Form from "../../components/Form";
import Unidades from "../../components/Unidades";
import { Container } from "./styles";

export function Contato() {
  return (
    <>
      <BlackHeader />
      <HeaderBanner text="Contato" backgroundImage={bgImage} />
      <Container>
        <Unidades />
        <Form />
      </Container>

      <div style={{ width: "100%" }}>
        <iframe
          title="Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.607999574824!2d-47.56484028882851!3d-22.406130620085655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7da540c0dee69%3A0x8552c1f75eae794c!2sON.LOC%20-%20Loca%C3%A7%C3%A3o%20de%20Computadores!5e0!3m2!1spt-BR!2sbr!4v1773403885779!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
