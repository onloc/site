
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
            Lorem ipsum dolor sit amet consectetur. Pharetra dui dui lorem
            tempor quis facilisis vel suspendisse phasellus. Enim quam
            parturient auctor pulvinar in interdum amet sit.
          </Subtitle>
        </ContainerContent>

        <Block>
          <BlockSection>
            <Number>+13</Number>
            <Text>Anos de experiência</Text>
          </BlockSection>

          <BlockSection>
            <Number>+480</Number>
            <Text>Clientes atendidos</Text>
          </BlockSection>

          <BlockSection>
            <Number>+6500</Number>
            <Text>Produtos locados</Text>
          </BlockSection>

          <BlockSection>
            <Number>+4824</Number>
            <Text>Computadores locados</Text>
          </BlockSection>
        </Block>
      </Container>
    </>
  );
}

export default OurNumbers;