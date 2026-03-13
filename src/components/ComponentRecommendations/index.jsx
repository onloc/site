import {
  Block,
  Container,
  Content,
  ContentButton,
  ContentGroup,
  ContentImage,
  ContentText,
  Rectangle,
  Tab,
  TabsContainer,
  Title,
  Triangle,
} from "./styles";

import desk from "../../assets/mock-produto.png";
import { useState } from "react";

function ComponentRecommendations() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Processadores",
    "Placas de Vídeo",
    "Memória RAM",
    "Armazenamento",
  ];

  const content = [
    {
      text: `Para utilizar o Cinema 4D para modelagem 3D e animações,
    recomendamos um processador de 4 a 6 núcleos com alta velocidade
    de clock.
      
    Se seu objetivo é renderizar, um processador com uma grande
    quantidade de núcleos de CPU fornecerá melhor desempenho.`,
    },
    {
      text: `Para utilizar o Cinema 4D com fluidez, recomendamos no 
      mínimo 16 GB de memória RAM para lidar com cenas complexas 
      e múltiplas tarefas simultâneas.

      Se você trabalha com projetos maiores ou renderizações 
      pesadas, considerar 32 GB ou mais de RAM garantirá mais 
      estabilidade e desempenho.`,
    },
    {
      text: `Para modelagem 3D e animações no Cinema 4D, uma placa de 
      vídeo dedicada com, no mínimo, 4 GB de memória VRAM 
      é altamente recomendada.

      Para renderizações mais complexas e em tempo real, uma GPU 
      de alto desempenho será essencial para melhorar a 
      produtividade.`,
    },
    {
      text: `Recomendamos o uso de SSDs para garantir carregamentos 
      rápidos de projetos, softwares e arquivos.
      
      Para armazenar arquivos grandes de animação e render, 
      combinar um SSD para o sistema com um HD adicional pode ser 
      uma solução eficiente.
      `,
    },
  ];

  return (
    <>
      <Title>Recomendações de Componentes</Title>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            onClick={() => setActiveTab(index)}
            style={{
              fontWeight: activeTab === index ? "bold" : "normal",
              cursor: "pointer",
              color: activeTab === index ? "black" : "#28018099",
            }}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      <Container>
        <Block>
          <Triangle />
          <Rectangle />

          <Content>
            <ContentImage src={desk} alt="Desk" />
            <ContentGroup>
              <ContentText>{content[activeTab].text}</ContentText>
              <ContentButton>Ver Computadores</ContentButton>
            </ContentGroup>
          </Content>
        </Block>
      </Container>
    </>
  );
}

export default ComponentRecommendations;
