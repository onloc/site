import { useLocation } from "react-router-dom";

import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import EquipamentoViewer from "../../components/EquipamentoViewer";
import EquipamentoDetalhesInfo from "../../components/EquipamentoDetalhesInfo";
import FAQ from "../../components/FAQ";
import RecomendItems from "../../components/RecomendItems";
import ClientComments from "../../components/ClientComments";

import {
  Page,
  ViewerSection,
  DetailsSection,
  RecomendedSection,
  Title,
  Divider,
  NotFound
} from "./styles";

export function EquipamentoDetalhes() {
  const location = useLocation();
  const { item } = location.state || {};

  const faqData = [
    {
      id: "01",
      title: "Como funciona?",
      content: `Para contratar as soluções personalizadas ON.LOC, basta ter em mente a quantidade e a configuração desejada, ou simplesmente nos informar a funcionalidade esperada com a máquina.

Com essas informações, indicaremos a melhor configuração, levando em conta a disponibilidade do estoque da ONLOC.

Os desktops e notebooks que fornecemos já vão com o sistema operacional original da Microsoft instalado, o Windows licenciado.

A equipe de TI da sua preferência poderá instalar ou formatar a máquina com os softwares necessários, incluindo o pacote Office. Com isso, você estará à vontade para gerenciar seus sistemas usuais.`
    },
    {
      id: "02",
      title: "E os aparelhos que não tem mais atualização de software?",
      content: `Lorem ipsum dolor sit amet...`
    },
    {
      id: "03",
      title: "Como é o processo de análise?",
      content: `Lorem ipsum dolor sit amet...`
    },
    {
      id: "04",
      title: "Quais formas de pagamento?",
      content: `Lorem ipsum dolor sit amet...`
    },
    {
      id: "05",
      title: "O que acontece com o final da minha assinatura?",
      content: `Lorem ipsum dolor sit amet...`
    }
  ];

  if (!item) {
    return (
      <>
        <BlackHeader />

        <NotFound>
          <h1>Produto não encontrado</h1>
        </NotFound>

        <Footer />
      </>
    );
  }

  return (
    <Page>
      <BlackHeader />

      <ViewerSection>
        <EquipamentoViewer item={item} />
      </ViewerSection>

      <DetailsSection>
        <EquipamentoDetalhesInfo />

        <Title>Perguntas Frequentes:</Title>

        <FAQ data={faqData} />
      </DetailsSection>

      <RecomendedSection>
        <RecomendItems />

        <Divider />

        <ClientComments />
      </RecomendedSection>

      <Footer />
    </Page>
  );
}