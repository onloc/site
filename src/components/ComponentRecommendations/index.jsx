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

import note from "../../assets/Equipamentos-Site-2026/Note/imgi_7_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256735.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComponentRecommendations() {
  const [activeTab, setActiveTab] = useState(0);

    const navigate = useNavigate();

  const tabs = [
    "Processadores",
    "Placas de Vídeo",
    "Memória RAM",
    "Armazenamento",
  ];

  const content = [
    {
      text: `O processador (CPU) é o principal componente responsável pelo 
      desempenho do computador, executando cálculos, gerenciando processos 
      e garantindo fluidez na operação de sistemas e aplicações corporativas.
      
      A escolha correta da CPU impacta diretamente na produtividade, 
      no tempo de resposta dos sistemas e na vida útil do equipamento..`,
    },
    {
      text: `A solução gráfica (GPU) é responsável pelo processamento visual, sendo essencial para atividades que envolvem múltiplos monitores, edição gráfica, engenharia, arquitetura ou análise de dados visuais.

      Com a configuração gráfica correta, o ambiente de trabalho se torna mais confortável, produtivo e compatível com aplicações específicas do mercado corporativo.`,
    },
    {
      text: `A memória RAM é responsável por manter ativos os dados e aplicações em uso, influenciando diretamente o desempenho em tarefas simultâneas e a fluidez do sistema operacional.

      Uma quantidade correta de memória reduz travamentos, melhora a experiência do usuário e aumenta a produtividade da equipe.`,
    },
    {
      text: `O armazenamento é responsável por guardar sistemas, arquivos e dados corporativos, impactando diretamente a velocidade de inicialização, abertura de programas e acesso às informações.
      
      Um sistema de armazenamento bem dimensionado garante agilidade operacional, reduz o tempo de espera e contribui para a continuidade do negócio.
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
            <ContentImage src={note} alt="Notebook" />
            <ContentGroup>
              <ContentText>{content[activeTab].text}</ContentText>
              <ContentButton onClick={() => navigate("/equipamentos")}>Ver Computadores</ContentButton>
            </ContentGroup>
          </Content>
        </Block>
      </Container>
    </>
  );
}

export default ComponentRecommendations;
