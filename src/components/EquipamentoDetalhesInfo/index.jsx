import {
  IconContainer,
  InfoBigBoxIcon,
  InfoBox,
  InfoBoxBig,
  InfoBoxText,
  InfoBoxTitle,
  InfoIcon,
  InfoSection,
  InfoText,
  NextStepsSection,
  Title,
} from "./styles";

import CPU from "../../assets/CPU-icon.png";
import Monitor from "../../assets/monitor-icon.png";
import Cabo from "../../assets/ethernet-icon.png";

import Call from "../../assets/call.png";
import Payments from "../../assets/payments.png";
import Documents from "../../assets/assignment.png";
import Delivery from "../../assets/airport_shuttle.png";

const EquipamentoDetalhesInfo = ({ item }) => {
  const { cpu, monitor, cabo } = item?.includes || {};

  return (
    <>
      <Title>O que vem na caixa</Title>
      <InfoSection>
        {cpu && (
          <InfoBox>
            <InfoIcon src={CPU} alt="CPU Icon" />
            <InfoText>CPU</InfoText>
          </InfoBox>
        )}

        {monitor && (
          <InfoBox>
            <InfoIcon src={Monitor} alt="Monitor Icon" />
            <InfoText>Monitor</InfoText>
          </InfoBox>
        )}

        {cabo && (
          <InfoBox>
            <InfoIcon src={Cabo} alt="Cabo de Energia Icon" />
            <InfoText>Cabo de Energia</InfoText>
          </InfoBox>
        )}
      </InfoSection>

      <Title>Próximos passos:</Title>
      <NextStepsSection>
        <InfoBoxBig>
          <IconContainer>
            <InfoBigBoxIcon src={Call} alt="Call Icon" />
          </IconContainer>
          <InfoBoxTitle>1. Entrar em Contato</InfoBoxTitle>
          {/* <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText> */}
        </InfoBoxBig>

        <InfoBoxBig>
          <IconContainer>
            <InfoBigBoxIcon src={Payments} alt="Payments Icon" />
          </IconContainer>
          <InfoBoxTitle>2. Solicitar Orçamento</InfoBoxTitle>
          {/* <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText> */}
        </InfoBoxBig>
        <InfoBoxBig>
          <IconContainer>
            <InfoBigBoxIcon src={Documents} alt="Documents Icon" />
          </IconContainer>
          <InfoBoxTitle>3. Envie os documentos</InfoBoxTitle>
          {/* <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText> */}
        </InfoBoxBig>
        <InfoBoxBig>
          <IconContainer>
            <InfoBigBoxIcon src={Delivery} alt="Delivery Icon" />
          </IconContainer>
          <InfoBoxTitle>4. Acompanhar a entrega</InfoBoxTitle>
          {/* <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText> */}
        </InfoBoxBig>
      </NextStepsSection>
    </>
  );
};

export default EquipamentoDetalhesInfo;
