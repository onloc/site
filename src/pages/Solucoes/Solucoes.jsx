import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import HeaderBanner from "../../components/HeaderBanner";
import ClientComments from "../../components/ClientComments";
import EquipamentoBannerFooter from "../../components/EquipamentoBannerFooter";
import Typography from "../../components/Typography";
import EquipamentLease from "../../components/EquipamentLease";

import bgImage from "../../assets/banner-solucoes.jpg";
import cursor from "../../assets/highlight_mouse_cursor.svg";
import data from "../../assets/data_loss_prevention.svg";
import laptop from "../../assets/laptop.svg";

import {
  Page,
  Content,
  TitleContainer,
  Cards,
  Card,
  Icon,
  CardTitle,
  BannerRow,
  RightBlock,
  LeftImage,
  LeftImagemContainer,
  RightImageContainer,
  Title,
  Text,
} from "./styles";

export function Solucoes() {
  return (
    <Page>
      <BlackHeader />

      <HeaderBanner
        text="Soluções"
        backgroundImage={bgImage}
        fontWeight="500"
      />

      <Content>
        <TitleContainer>
          <Typography variant="Quicksand" fontSize="clamp(24px,4vw,44px)">
            Soluções inteligentes, resultados reais: descubra por que escolher a
            ON.LOC
          </Typography>
        </TitleContainer>

        <Cards>
          <Card>
            <Icon src={cursor} alt="Cursor" />

            <CardTitle>
              <Typography variant="Quicksand" fontSize="18px" fontWeight="500">
                Melhor Custo x Benefício
              </Typography>
            </CardTitle>

            <Typography variant="Montserrat" fontSize="16px">
              Com a locação de computadores, você pode investir o capital da sua
              empresa em desenvolvimento e novas oportunidades, isso sem perder
              a eficiência tecnológica, garantindo tranquilidade para seus
              colaboradores.
            </Typography>
          </Card>

          <Card>
            <Icon src={laptop} alt="Laptop" />

            <CardTitle>
              <Typography variant="Quicksand" fontSize="18px" fontWeight="500">
                Suporte Técnico Ágil
              </Typography>
            </CardTitle>

            <Typography variant="Montserrat" fontSize="16px">
              Nossa equipe especializada está sempre pronta para substituir e
              realizar a atualização os equipamentos, eliminando assim o período
              ocioso e improdutivo que o seu colaborador teria durante um
              reparo.
              <br />
              Nosso suporte mantém a tecnologia da sua empresa
            </Typography>
          </Card>

          <Card>
            <Icon src={data} alt="Data Loss Prevention" />

            <CardTitle>
              <Typography variant="Quicksand" fontSize="18px" fontWeight="500">
                Redução Fiscal
              </Typography>
            </CardTitle>

            <Typography variant="Montserrat" fontSize="16px">
              Os valores investidos com o aluguel de computadores podem ser
              deduzidos no Imposto de Renda da Empresa em até 40%. Reduza os
              custos de sua empresa mantendo a funcionabilidade e otimize seus
              recursos.
            </Typography>
          </Card>
        </Cards>
      </Content>

      <BannerRow>
        <LeftImage>
          <LeftImagemContainer>
            <Title>Service Desk</Title>
            <Text>
              Conte com uma equipe de suporte técnico especializada para
              resolver rapidamente qualquer problema relacionado aos
              equipamentos alugados, garantindo que sua empresa mantenha a
              produtividade sem interrupções.
            </Text>
          </LeftImagemContainer>
        </LeftImage>

        <RightBlock>
          <RightImageContainer>
            <Title>Tecnologia a favor da sua Empresa </Title>
            <Text>
              A ON.LOC é uma empresa dedicada ao mercado de soluções práticas em
              tecnologia de informação, e oferece um portfólio de serviços
              voltados para empresas que buscam otimizar seus processos.
              <br />
              <br />
              Ao alugar um equipamento de TI, a ON.LOC garante suporte técnico
              de hardware integral. A medida que a tecnologia fica obsoleta o
              equipamento é substituído sem demanda de grandes valores.
            </Text>
          </RightImageContainer>
        </RightBlock>
      </BannerRow>

      <EquipamentLease />
      <EquipamentoBannerFooter />
      <ClientComments />
      <Footer />
    </Page>
  );
}
