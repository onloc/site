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
      title: "Como funciona o processo de locação na on.loc?",
      content: `Para contratar as soluções personalizadas ON.LOC, basta ter em mente a quantidade e a configuração desejada, ou simplesmente nos informar a funcionalidade esperada com a máquina.

        Com essas informações, indicaremos a melhor configuração, levando em conta a disponibilidade do estoque da ONLOC.

        Os desktops e notebooks que fornecemos já vão com o sistema operacional original da Microsoft instalado, o Windows licenciado.

        A equipe de TI da sua preferência poderá instalar ou formatar a máquina com os softwares necessários, incluindo o pacote Office. Com isso, você estará à vontade para gerenciar seus sistemas usuais.`,
    },
    {
      id: "02",
      title: "É seguro alugar pela plataforma?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
        Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "03",
      title: "Preciso pagar alguma taxa para usar a on.loc?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
        Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "04",
      title: "Posso cancelar uma locação?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
        Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "05",
      title: "O que acontece se o item locado apresentar problemas?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
        Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
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
