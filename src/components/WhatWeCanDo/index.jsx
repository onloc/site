import {
  Block,
  BlockContainer,
  BlockText,
  BlockTitle,
  Button,
  Container,
  ContentContainer,
  SideImage,
  Text,
  Title,
  Wrap,
} from "./styles";

import sideImage from "../../assets/what-we-can-do-banner.png";

function WhatWeCanDo({ onScrollToForm }) {
  return (
    <>
      <Wrap>
        <Container>
          <ContentContainer>
            <Title>
              Soluções que fazem sentido para o dia a dia da sua empresa
            </Title>
            <Text>
              Com equipamentos de alta performance e o know-how de uma equipe
              especializada, a ON.LOC entrega aos clientes tecnologia, inovação
              e a tranquilidade do outsourcing,
              <br />
              <br />
              permitindo assim que suas equipes possam se dedicar a outros
              trabalhos, essenciais para o desenvolvimento do seu negócio.
            </Text>
            <BlockContainer>
              <Block>
                <BlockTitle>Melhor Custo x Benefício</BlockTitle>
                <BlockText>
                  Trabalhamos de forma consultiva, entendendo o cenário de cada
                  cliente para indicar a infraestrutura de tecnologia mais
                  adequada, sempre com suporte técnico especializado,
                  atendimento ágil e soluções escaláveis.
                </BlockText>
              </Block>
              <Block>
                <BlockTitle>Suporte técnico ágil e especializado</BlockTitle>
                <BlockText>
                  Contar com suporte técnico rápido faz toda a diferença na
                  rotina da empresa. A ON.LOC oferece atendimento ágil e
                  especializado, reduzindo paradas, evitando retrabalho e
                  garantindo a continuidade da operação.
                </BlockText>
              </Block>
              <Block>
                <BlockTitle>Redução fiscal</BlockTitle>
                <BlockText>
                  A locação de equipamentos de TI pode gerar vantagens fiscais,
                  além de simplificar a gestão contábil da empresa. Em vez de
                  imobilizar ativos, os custos passam a ser operacionais,
                  facilitando o planejamento financeiro.
                </BlockText>
              </Block>
            </BlockContainer>
            <Button onClick={onScrollToForm}>Quero alugar</Button>
          </ContentContainer>
          <SideImage src={sideImage} alt="Imagem de equipamentos" />
        </Container>
      </Wrap>
    </>
  );
}

export default WhatWeCanDo;
