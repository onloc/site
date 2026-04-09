import {
  Block,
  Block2,
  Button,
  Column,
  Container,
  ContentContainer,
  Icon,
  ImageText,
  ImageWrapper,
  ListContainer,
  ListItem,
  Subtitle,
  Text,
  Title,
  Wrap,
} from "./styles";

import checkIcon from "../../assets/check-icon.png";

import leftImage from "../../assets/left-image-banner.png";
import rightImage from "../../assets/right-image-banner.png";

function EquipamentLease({ onScrollToForm }) {
  const disadvantages = [
    "Capital imobilizado em equipamentos;",
    "Queda na produtividade;",
    "Contratos longos sem flexibilização frente ao mercado;",
    "Depreciação dos equipamentos;",
    "Custos com manutenção e suporte;",
    "Custos elevados para mudança de tecnologia;",
    "Equipamentos obsoletos;",
    "Problemas frequentes nos computadores;",
    "Colaboradores ociosos aguardando a manutenção da maquina;",
  ];

  return (
    <>
      <Wrap>
        <Container>
          <ContentContainer>
            <Title>Locação de Equipamentos</Title>
            <Text>
              A evolução tecnológica é muito rápida e o aluguel de equipamentos
              se torna uma excelente opção para empresas que buscam melhor
              desempenho atrelado ao baixo custo.
              <br />
              <br />A ON.LOC trabalha com contratos de locação para grandes,
              médias e pequenas empresas que visam obter todos os ganhos
              referentes as vantagens tecnológicas, fiscais, financeiras e
              administrativas.
            </Text>
            <Block src={leftImage} $display={true} />
          </ContentContainer>
          <ContentContainer>
            <ImageWrapper>
              <Block2 src={rightImage} />
              <ImageText>
                Garantia de suporte
                <br />
                em até 8h úteis.
              </ImageText>
            </ImageWrapper>
            <Subtitle>
              Algumas desvantagens da compra de equipamentos de TI:
            </Subtitle>
            <ListContainer>
              <Column>
                {disadvantages.slice(0, 5).map((item, index) => (
                  <ListItem key={index}>
                    <Icon src={checkIcon} />
                    <span>{item}</span>
                  </ListItem>
                ))}
              </Column>

              <Column>
                {disadvantages.slice(5).map((item, index) => (
                  <ListItem key={index}>
                    <Icon src={checkIcon} />
                    <span>{item}</span>
                  </ListItem>
                ))}
              </Column>
            </ListContainer>
            <Button onClick={onScrollToForm}>Quero Alugar</Button>
            <Block src={leftImage} $display={false} />
          </ContentContainer>
        </Container>
      </Wrap>
    </>
  );
}

export default EquipamentLease;
