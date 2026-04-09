import { Container, ContentContainer, Subtitle, Title } from "./styles";
import ButtonComponent from "../ButtonComponent";

const EquipamentoBannerFooter = ({ onScrollToForm }) => {
  return (
    <Container>
      <ContentContainer>
        <Title>Melhor custo-benefício na categoria de alta performance</Title>
        <Subtitle>
          Seja alugando uma única máquina ou todo seu parque, oferecemos
          soluções que se encaixam na sua necessidade.
        </Subtitle>
      </ContentContainer>
      <ButtonComponent text="Quero Alugar" func={onScrollToForm} />
    </Container>
  );
};

export default EquipamentoBannerFooter;
