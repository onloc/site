import { useState } from "react";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  FAQContainer,
  Title,
} from "./styles";

import Arrow from "../../assets/arrow_insert.png";

const faqData = [
  {
    id: "01",
    title: "Como funciona?",
    content: `Para contratar as soluções personalizadas ON.LOC, basta ter em mente a quantidade e a configuração desejada, ou simplesmente nos informar a funcionalidade esperada com a máquina.

Com essas informações, indicaremos a melhor configuração, levando em conta a disponibilidade do estoque da ONLOC.

Os desktops e notebooks que fornecemos já vão com o sistema operacional original da Microsoft instalado, o Windows licenciado.

A equipe de TI da sua preferência poderá instalar ou formatar a máquina com os softwares necessários, incluindo o pacote Office. Com isso, você estará à vontade para gerenciar seus sistemas usuais.`,
  },
  {
    id: "02",
    title: "E os aparelhos que não tem mais atualização de software?",
    content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
  },
  {
    id: "03",
    title: "Como é o processo de análise?",
    content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
  },
  {
    id: "04",
    title: "Quais formas de pagamento?",
    content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
  },
  {
    id: "05",
    title: "O que acontece com o final da minha assinatura?",
    content: `Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi pellentesque. 
    
Donec sed nunc sed amet. Nunc sed nunc sed amet. Leo donec netus libero facilisi pellentesque. Donec sed nunc sed amet. Nunc sed nunc sed amet.`,
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Perguntas Frequentes:</Title>

      {faqData.map((item, index) => (
        <AccordionItem key={item.id}>
          <AccordionHeader
            isOpen={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <span className="number">{item.id}</span>
            <span className="title">{item.title}</span>
            <img className="icon" src={Arrow} alt="Arrow" />
          </AccordionHeader>

          <AccordionContent isOpen={activeIndex === index}>
            {item.content.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
