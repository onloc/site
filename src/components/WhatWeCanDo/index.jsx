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

function WhatWeCanDo() {
  return (
    <>
      <Wrap>
        <Container>
          <ContentContainer>
            <Title>O que podemos fazer por você</Title>
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
                  A locação de equipamentos permite que sua empresa tenha
                  tecnologia atualizada, sem a necessidade de grandes
                  investimentos iniciais. Com a ON.LOC, você paga apenas pelo
                  que usa, mantendo previsibilidade de custos e melhor
                  aproveitamento do orçamento de TI.
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
            <Button>Quero alugar</Button>
          </ContentContainer>
          <SideImage src={sideImage} alt="Imagem de equipamentos" />
        </Container>
      </Wrap>
    </>
  );
}

export default WhatWeCanDo;
