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
      title: "Existem planos de locação de curto, médio e longo prazo?",
      content: `Os contratos de locação podem ser de 12, 24 ou 36 meses, sendo o último mais vantajoso em custo-benefício.`,
    },
    {
      id: "02",
      title: "Como é feito o pagamento da locação?",
      content: `O pagamento é feito através de boletos bancários enviados mensalmente ao cliente.`,
    },
    {
      id: "03",
      title: "É possível renovar ou encerrar o contrato antes do prazo estabelecido?",
      content: `É possível rescindir o contrato antes do término do prazo mediante solicitação formal via e-mail, e será cobrada multa equivalente a apenas 3 mensalidades.`,
    },
    {
      id: "04",
      title: "O valor da locação é fixo durante todo o contrato?",
      content: `O valor da locação de cada equipamento é fixo durante todo o período de contrato, o valor total a ser pago só é alterado mediante novas locações e upgrades solicitados diretamente pelo cliente.`,
    },
    {
      id: "05",
      title: "É possível aumentar ou reduzir a quantidade de equipamentos durante o contrato?",
      content: `Sim, é possível realizar toda e qualquer alteração na quantidade/tipo de equipamentos locados ao longo do contrato. `,
    },
    {
      id: "06",
      title: "Há substituição do equipamento em caso de problemas?",
      content: `Se, através da abertura do chamado, for verificado a necessidade de substituição do equipamento, a mesma será feita em até 8 horas úteis.`,
    },
    {
      id: "07",
      title: "Como funciona o processo de entrega e retirada dos equipamentos?",
      content: `Nossa equipe realiza a entrega e retirada de equipamentos após agendamento direto com o cliente, sem custos adicionais de trajeto.`,
    },
    {
      id: "08",
      title: "Existe custo adicional para transporte, instalação ou configuração?",
      content: `Não existe custo adicional para estes serviços.`,
    },
    {
      id: "09",
      title: "Como é garantida a segurança das informações armazenadas nos equipamentos?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "10",
      title: "Como o serviço apoia empresas em projetos temporários, eventos ou expansão rápida?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
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
