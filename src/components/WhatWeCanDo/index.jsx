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
                  Com a locação de computadores, você pode investir o capital da
                  sua empresa em desenvolvimento e novas oportunidades, sem
                  perder a eficiência tecnológica, garantindo tranquilidade para
                  seus colaboradores.
                </BlockText>
              </Block>
              <Block>
                <BlockTitle>Suporte Técnico Ágil</BlockTitle>
                <BlockText>
                  Nossa equipe especializada está sempre pronta para
                  substituição e atualização dos equipamentos, eliminando o
                  período ocioso e improdutivo que seu colaborador teria durante
                  um reparo.
                </BlockText>
              </Block>
              <Block>
                <BlockTitle>Melhor Custo x Benefício</BlockTitle>
                <BlockText>
                  Os valores investidos com o aluguel de computadores podem ser
                  deduzidos no Imposto de Renda da Empresa em até 40%. Reduza os
                  custos mantendo a funcionabilidade e otimize seus recursos
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
