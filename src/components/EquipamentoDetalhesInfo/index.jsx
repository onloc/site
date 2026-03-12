import {
  InfoBigBoxIcon,
  InfoBox,
  InfoBoxBig,
  InfoBoxText,
  InfoBoxTitle,
  InfoIcon,
  InfoText,
  Title,
} from "./styles";

import CPU from "../../assets/CPU-icon.png";
import Monitor from "../../assets/monitor-icon.png";
import Cabo from "../../assets/ethernet-icon.png";

import Call from "../../assets/call.png";
import Payments from "../../assets/payments.png";
import Documents from "../../assets/assignment.png";
import Delivery from "../../assets/airport_shuttle.png";

const EquipamentoDetalhesInfo = () => {
  return (
    <>
      <Title>O que vem na caixa</Title>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "52px",
          marginBottom: "52px",
        }}
      >
        <InfoBox>
          <InfoIcon src={CPU} alt="CPU Icon" />
          <InfoText>CPU</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoIcon src={Monitor} alt="Monitor Icon" />
          <InfoText>Monitor</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoIcon src={Cabo} alt="Cabo de Energia Icon" />
          <InfoText>Cabo de Energia</InfoText>
        </InfoBox>
      </div>

      <Title>Próximos passos:</Title>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "52px",
          marginBottom: "52px",
        }}
      >
        <InfoBoxBig>
          <InfoBigBoxIcon src={Call} alt="Call Icon" />
          <InfoBoxTitle>1. Entrar em Contato</InfoBoxTitle>
          <br />
          <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText>
        </InfoBoxBig>
        <InfoBoxBig>
          <InfoBigBoxIcon src={Payments} alt="Payments Icon" />
          <InfoBoxTitle>2. Escolher forma de pagamento</InfoBoxTitle>
          <br />
          <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText>
        </InfoBoxBig>
        <InfoBoxBig>
          <InfoBigBoxIcon src={Documents} alt="Documents Icon" />
          <InfoBoxTitle>3. Envie os documentos</InfoBoxTitle>
          <br />
          <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText>
        </InfoBoxBig>
        <InfoBoxBig>
          <InfoBigBoxIcon src={Delivery} alt="Delivery Icon" />
          <InfoBoxTitle>4. Acompanhar a entrega</InfoBoxTitle>
          <br />
          <InfoBoxText>
            Lorem ipsum dolor sit amet consectetur. Leo donec netus libero
            facilisi pellentesque.
          </InfoBoxText>
        </InfoBoxBig>
      </div>
    </>
  );
};

export default EquipamentoDetalhesInfo;
