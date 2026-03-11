import { Container, Subtitle, Title } from "./styles";
import ButtonComponent from "../ButtonComponent";

const EquipamentoBannerFooter = () => {
  return (
    <Container>
      <div style={{ width: "622px", height: "156px", gap: "16px" }}>
        <Title>Melhor custo-benefício na categoria de alta performance</Title>
        <Subtitle>
          Seja alugando uma única máquina ou todo seu parque, oferecemos
          soluções que se encaixam na sua necessidade.
        </Subtitle>
      </div>
      <ButtonComponent text="Quero Alugar" />
    </Container>
  );
};

export default EquipamentoBannerFooter;
