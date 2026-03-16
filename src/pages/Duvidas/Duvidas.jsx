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
      title: "Como faço para iniciar uma Locação?",
      content: `Para contratar as soluções personalizadas ON.LOC, basta ter em mente a quantidade e a configuração desejada, ou simplesmente nos informar a funcionalidade esperada com a máquina.

Com essas informações, indicaremos a melhor configuração, levando em conta a disponibilidade do estoque da ONLOC.

Os desktops e notebooks que fornecemos já vão com o sistema operacional original da Microsoft instalado, o Windows licenciado.

A equipe de TI da sua preferência poderá instalar ou formatar a máquina com os softwares necessários, incluindo o pacote Office. Com isso, você estará à vontade para gerenciar seus sistemas usuais.`,
    },
    {
      id: "02",
      title: "Qual número do Suporte Técnico?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "03",
      title: "Dúvidas Financeiras",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "04",
      title: "Política de Pagamento",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "05",
      title: "Qual prazo de entrega?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "06",
      title: "Como solicitar um Upgrade em minha Locação?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "07",
      title: "Qual diferença entre Hardware e Software?",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "08",
      title: "Política de Devolução",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "09",
      title: "Política de Privacidade",
      content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
    },
    {
      id: "10",
      title: "Política de Cookies",
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
