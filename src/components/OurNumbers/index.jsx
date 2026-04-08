import {
  Container,
  Block,
  BlockSection,
  Title,
  Subtitle,
  ContainerContent,
  Number,
  Text,
} from "./styles";

function OurNumbers() {
  return (
    <>
      <Container>
        <ContainerContent>
          <Title>Nossos Números</Title>
          <Subtitle>
            Com mais de 13 anos de experiência entregando soluções em tecnologia para empresas
            de Rio Claro e região. Resultados construídos com parceria,
            confiança e infraestrutura de TI bem dimensionada. É assim que
            ajudamos negócios a crescer com tecnologia eficiente e sem
            complicação.
          </Subtitle>
        </ContainerContent>

        <Block>
          <BlockSection>
            <Number>+13</Number>
            <Text>Anos de experiência</Text>
          </BlockSection>

          <BlockSection>
            <Number>+650</Number>
            <Text>Clientes atendidos</Text>
          </BlockSection>

          <BlockSection>
            <Number>+8000</Number>
            <Text>Produtos locados</Text>
          </BlockSection>

          <BlockSection>
            <Number>+4000</Number>
            <Text>Computadores locados</Text>
          </BlockSection>
        </Block>
      </Container>
    </>
  );
}

export default OurNumbers;
