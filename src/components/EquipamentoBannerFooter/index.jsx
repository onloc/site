import { Container, ContentContainer, Subtitle, Title } from "./styles";
import ButtonComponent from "../ButtonComponent";

const EquipamentoBannerFooter = ({ onScrollToForm }) => {
  const handleWhatsAppRedirect = () => {
    window.open(
      "https://wa.me/551930236697",
      "_blank",
    );
  };

  return (
    <Container>
      <ContentContainer>
        <Title>Melhor custo-benefício na categoria de alta performance</Title>
        <Subtitle>
          Seja alugando uma única máquina ou todo seu parque, oferecemos
          soluções que se encaixam na sua necessidade.
        </Subtitle>
      </ContentContainer>
      <ButtonComponent text="Quero Alugar" func={handleWhatsAppRedirect} />
    </Container>
  );
};

export default EquipamentoBannerFooter;
