import FAQ from "../FAQ";
import {
  Container,
  FAQContainer,
  Image,
  ImageContainer,
  Text,
  Title,
} from "./styles";

import FAQImage from "../../assets/faq-image.png";

function HomeQuestions() {
  const faqData = [
    {
      id: "01",
      title: "O que é a locação de computadores para empresas?",
      content: `É uma solução que permite utilizar computadores, notebooks e outros equipamentos de TI por meio de um contrato mensal, com suporte técnico incluso, sem a necessidade de compra e imobilização de capital.`,
    },
    {
      id: "02",
      title: "Quais equipamentos posso alugar com a ON.LOC?",
      content: `A ON.LOC oferece locação de mini desktops, notebooks, workstations, servidores, monitores, entre outras soluções, sempre configuradas conforme a necessidade da sua empresa.`,
    },
    {
      id: "03",
      title: "A locação inclui suporte técnico?",
      content: `Sim. Todos os equipamentos contam com suporte técnico ágil e especializado, garantindo continuidade da operação e redução de paradas no dia a dia.`,
    },
    {
      id: "04",
      title: "Alugar computadores é mais vantajoso do que comprar?",
      content: `Para muitas empresas, sim. A locação oferece previsibilidade de custos, equipamentos atualizados, menor impacto fiscal e menos preocupação com manutenção e obsolescência.`,
    },
    {
      id: "05",
      title: "A ON.LOC atende empresas de qualquer porte?",
      content: `Sim. Atendemos desde pequenas e médias empresas até operações maiores, sempre com soluções sob medida para cada realidade.`,
    },
  ];

  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={FAQImage} alt="FAQ" />
        </ImageContainer>
        <FAQContainer>
          <Title>Dúvidas frequentes</Title>
          <Text>
            Aqui você encontra respostas para as perguntas mais comuns sobre
            nossos serviços, processos e funcionalidades. Se ainda tiver alguma
            dúvida, fale com a gente — estamos prontos para ajudar!
          </Text>
          <FAQ data={faqData} variant="home" />
        </FAQContainer>
      </Container>
    </>
  );
}

export default HomeQuestions;
