import { Card, Container, Description, Icon, Title, Wrapper } from "./styles";

import certificadoIcon from "../../assets/InfoSuportIcons/certificado.png";
import configicon from "../../assets/InfoSuportIcons/config.png";
import logoutIcon from "../../assets/InfoSuportIcons/logout.png";

export function InfoSuportSection() {
  return (
    <>
      <Wrapper>
        <Container>
          <Card>
            <Icon src={configicon} alt="Configurações" />
            <Title>Software e Suporte</Title>{" "}
            <Description>
              Nosso suporte e manutenção de Software(s) são apenas para
              restauração do sistema operacional e programas instalados
              descritos no ato do pedido. Não somos responsáveis sobre outras
              configurações, atualizações, questões sobre Backups de arquivos e
              Vírus.
            </Description>
          </Card>
          <Card>
            <Icon src={logoutIcon} alt="Logout" />
            <Title>Políticas de Devolução</Title>{" "}
            <Description>
              Os equipamentos acompanham Nota Fiscal de Remessa (NFe/Danfe). A
              empresa locatária deve providenciar a Nota Fiscal de Devolução dos
              equipamentos ao fim do contrato ou necessidade de troca de
              equipamentos em chamados técnicos. A Isenção de Inscrição Estadual
              ou a Não Obrigatoriedade de emissão de Notas Fiscais deverão ser
              comprovadas com declaração ou documento legal.
            </Description>
          </Card>
          <Card>
            <Icon src={certificadoIcon} alt="Certificado" />
            <Title>SLA - Garantia</Title>{" "}
            <Description>
              Nossa garantia contempla; Partes, Peças, Trocas e Serviços.
              <br />
              <br /> O atendimento é feito em até 8 horas úteis após as
              solicitação de segunda à sexta-feira das 08h às 18h, com resolução
              do problema ou troca do(s) equipamento(s). Para serviços fora do
              padrão contratados, favor consultar nossa equipe. Caso hajam
              defeitos não comprovados de hardware ou software a LOCATÁRIA
              compromete-se a indenizar a LOCADORA com base nos valores dos
              chamados técnicos.
            </Description>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
}
