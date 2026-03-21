import {
  WhyLease,
  WhyLeaseTitleContainer,
  WhyLeaseTitle,
  WhyLeaseIcon,
  WhyLeaseText,
  WhyLeaseImage,
  WhyLeaseContainer,
} from "./styles";

import backgroundImage from "../../assets/background-image.png";
import computerIcon from "../../assets/computer-icon.png";
import whiteDesk from "../../assets/white-desk.png";

function WhyLeaseComponent() {
  return (
    <>
      <WhyLease $backgroundImage={backgroundImage}>
        <WhyLeaseContainer>
          <WhyLeaseTitleContainer>
            <WhyLeaseIcon src={computerIcon} alt="Computer Icon" />
            <WhyLeaseTitle>Por que Locar?</WhyLeaseTitle>
          </WhyLeaseTitleContainer>
          <WhyLeaseText>
            Alugar computadores é a forma mais prática de manter sua empresa
            produtiva, com equipamentos atualizados, suporte especializado e
            custos previsíveis.
           <b> A locação elimina altos investimentos iniciais, reduz a preocupação com manutenção e permite que sua equipe foque no que realmente importa</b>
          </WhyLeaseText>
          <WhyLeaseImage src={whiteDesk} alt="White Desk" />
        </WhyLeaseContainer>
      </WhyLease>
    </>
  );
}

export default WhyLeaseComponent;
