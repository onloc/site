import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import FAQ from "../../components/FAQ";
import HeaderBanner from "../../components/HeaderBanner";

import bgImage from "../../assets/duvidasbanner.png";
import FormContainer from "../../components/FormContainer";
import { FAQContainer, Title } from "./styles";

export function Duvidas() {
  const faqData = [
    {
      id: "01",
      title: "O que é a locação de computadores para empresas?",
      content:
        "É uma solução que permite utilizar computadores, notebooks e outros equipamentos de TI por meio de um contrato mensal, com suporte técnico incluso, sem a necessidade de compra e imobilização de capital.",
    },
    {
      id: "02",
      title: "Quais equipamentos posso alugar com a ON.LOC?",
      content:
        "A ON.LOC oferece locação de mini desktops, notebooks, workstations, servidores, monitores, entre outras soluções, sempre configuradas conforme a necessidade da sua empresa.",
    },
    {
      id: "03",
      title: "A locação inclui suporte técnico?",
      content:
        "Sim. Todos os equipamentos contam com suporte técnico ágil e especializado, garantindo continuidade da operação e redução de paradas no dia a dia.",
    },
    {
      id: "04",
      title: "Alugar computadores é mais vantajoso do que comprar?",
      content:
        "A locação oferece previsibilidade de custos, equipamentos atualizados, menor impacto fiscal e menos preocupação com manutenção e obsolescência.",
    },
    {
      id: "05",
      title: "A ON.LOC atende empresas de qualquer porte?",
      content:
        "Sim. Atendemos desde pequenas e médias empresas até operações maiores, sempre com soluções sob medida para cada realidade.",
    },
    {
      id: "06",
      title: "Existem planos de locação de curto, médio e longo prazo?",
      content: `Os contratos de locação podem ser de 12, 24 ou 36 meses, sendo o último mais vantajoso em custo-benefício.`,
    },
    {
      id: "07",
      title: "Como é feito o pagamento da locação?",
      content: `O pagamento é feito através de boletos bancários enviados mensalmente ao cliente.`,
    },
    {
      id: "08",
      title:
        "É possível renovar ou encerrar o contrato antes do prazo estabelecido?",
      content: `É possível rescindir o contrato antes do término do prazo mediante solicitação formal via e-mail, e será cobrada multa equivalente a apenas 3 mensalidades.`,
    },
    {
      id: "09",
      title: "O valor da locação é fixo durante todo o contrato?",
      content: `O valor da locação de cada equipamento é fixo durante todo o período de contrato, o valor total a ser pago só é alterado mediante novas locações e upgrades solicitados diretamente pelo cliente.`,
    },
    {
      id: "10",
      title:
        "É possível aumentar ou reduzir a quantidade de equipamentos durante o contrato?",
      content: `Sim, é possível realizar toda e qualquer alteração na quantidade/tipo de equipamentos locados ao longo do contrato.`,
    },
    {
      id: "11",
      title: "Há substituição do equipamento em caso de problemas?",
      content: `Se, através da abertura do chamado, for verificado a necessidade de substituição do equipamento, a mesma será feita em até 8 horas úteis.`,
    },
    {
      id: "12",
      title: "Como funciona o processo de entrega e retirada dos equipamentos?",
      content: `Nossa equipe realiza a entrega e retirada de equipamentos após agendamento direto com o cliente, sem custos adicionais de trajeto.`,
    },
    {
      id: "13",
      title:
        "Existe custo adicional para transporte, instalação ou configuração?",
      content: `Não existe custo adicional para estes serviços.`,
    },
    {
      id: "14",
      title:
        "A locação de computadores gera benefícios fiscais?",
      content: `Sim. Em muitos casos, os valores pagos na locação podem ser lançados como despesa operacional, reduzindo a base de cálculo de impostos (especialmente no Lucro Real). Além disso, a locação evita imobilização de capital e pode trazer ganhos no fluxo de caixa, tornando-se uma alternativa financeiramente mais eficiente em comparação à compra.`,
    },
    {
      id: "15",
      title:
        "É possível integrar os computadores alugados à infraestrutura de TI existente?",
      content: `Sim. Os equipamentos podem ser configurados para operar dentro da infraestrutura já existente da empresa, respeitando padrões de rede, domínio, segurança e sistemas utilizados. Isso garante continuidade operacional sem impacto na rotina dos usuários.`,
    },
  ];
  return (
    <>
      <BlackHeader />
      <HeaderBanner text="Dúvidas" backgroundImage={bgImage} />
      <FAQContainer>
        <Title>Tudo o que você precisa saber sobre</Title>
        <FAQ data={faqData} />
      </FAQContainer>
      <FormContainer />
      <Footer />
    </>
  );
}
