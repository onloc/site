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
          Alocar computadores com a Onloc é sinônimo de economia, flexibilidade
          e tecnologia de ponta. Com soluções personalizadas e equipamentos
          atualizados, sua empresa ganha em produtividade sem precisar investir
          em infraestrutura.{" "}
          <b>
            Ideal para projetos temporários, expansão rápida ou modernização.
          </b>
        </WhyLeaseText>
        <WhyLeaseImage src={whiteDesk} alt="White Desk" />
        </WhyLeaseContainer>
      </WhyLease>
    </>
  );
}

export default WhyLeaseComponent;
