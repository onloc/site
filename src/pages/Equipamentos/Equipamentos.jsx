import { useState } from "react";
import { Page, ViewerSection, DetailsSection, Title } from "./styles";

import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import HeaderBanner from "../../components/HeaderBanner";
import EquipamentoFilter from "../../components/EquipamentoFilter";
import EquipamentoViewer from "../../components/EquipamentoViewer";
import EquipamentoDetalhesInfo from "../../components/EquipamentoDetalhesInfo";
import FAQ from "../../components/FAQ";
import EquipamentoBannerFooter from "../../components/EquipamentoBannerFooter/index";

// Assets
import desktop from "../../assets/Equipamentos-Site-2026/Desktop/imgi_4_desktop-optiplex-7020-sff-plus-black-gallery-1.png";
import desktop2 from "../../assets/Equipamentos-Site-2026/Desktop/imgi_5_desktop-optiplex-7020-sff-plus-black-gallery-2.png";
import desktop3 from "../../assets/Equipamentos-Site-2026/Desktop/imgi_6_desktop-optiplex-7020-sff-plus-black-gallery-4.png";
import desktop4 from "../../assets/Equipamentos-Site-2026/Desktop/imgi_23_desktop-pro-qcs1250-slim-odd-black-gallery-2.png";

import minidesk from "../../assets/Equipamentos-Site-2026/Minidesk/imgi_9_glqtvt97991qr6pvpld5xlndawix36601264.png";
import minidesk2 from "../../assets/Equipamentos-Site-2026/Minidesk/imgi_21_yq7rqz1e8o9ozgrcn4t71w1qzpxzfo327531.png";
import minidesk3 from "../../assets/Equipamentos-Site-2026/Minidesk/imgi_48_rryzzn42un53vrmchjj5ptjshpk2dw648337.png";
import minidesk4 from "../../assets/Equipamentos-Site-2026/Minidesk/imgi_51_c27r2nx4655ly9qezpts1fbx63ze4a442645.png";

import notebook from "../../assets/Equipamentos-Site-2026/Note/imgi_7_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256735.png";
import notebook2 from "../../assets/Equipamentos-Site-2026/Note/imgi_96_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256730.png";
import notebook3 from "../../assets/Equipamentos-Site-2026/Note/imgi_95_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256729.png";
import notebook4 from "../../assets/Equipamentos-Site-2026/Note/imgi_97_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256732.png";

import servidor from "../../assets/Equipamentos-Site-2026/Servidores/imgi_3_server-poweredge-t560-silver-gallery-5.png";
import servidor2 from "../../assets/Equipamentos-Site-2026/Servidores/imgi_4_server-poweredge-t560-silver-gallery-2.png";
import servidor3 from "../../assets/Equipamentos-Site-2026/Servidores/imgi_5_server-poweredge-t560-silver-gallery-4.png";
import servidor4 from "../../assets/Equipamentos-Site-2026/Servidores/imgi_6_server-poweredge-t560-silver-gallery-10.png";

import workstation from "../../assets/Equipamentos-Site-2026/Workdesk/Sem-Título-1_0003_imgi_76_71eGNRo6GiL._AC_SL1500_.png";
import workstation2 from "../../assets/Equipamentos-Site-2026/Workdesk/Sem-Título-1_0004_imgi_68_71NhLolPneL._AC_SL1500_.png";
import workstation3 from "../../assets/Equipamentos-Site-2026/Workdesk/Sem-Título-1_0005_imgi_61_71lIdeL2aBL._AC_SL1500_.png";
import workstation4 from "../../assets/Equipamentos-Site-2026/Workdesk/Sem-Título-1_0007_imgi_40_71hC2KxRokL._AC_SL1500_.png";

import bgImage from "../../assets/retangle-banner.png";

const mockItem = [
  {
    name: "Minidesk",
    image: minidesk,
    description:
      "Indicados para ambientes administrativos, call centers e estações fixas com pouco espaço, os mini desktops oferecem desempenho estável, baixo consumo de energia e fácil integração à infraestrutura de TI da empresa.",
    gallery: [minidesk, minidesk2, minidesk3, minidesk4],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      {
        id: "01",
        title: "Como funciona?",
        content:
          "Contratar a ON.LOC é simples. Você pode nos informar a quantidade de equipamentos e a configuração desejada ou apenas descrever o que precisa no dia a dia. Com base nisso, indicamos a melhor solução disponível em nosso estoque, pronta para uso. Todos os equipamentos são entregues com Windows original e licenciado, garantindo segurança e confiabilidade desde o primeiro uso.",
      },
      {
        id: "02",
        title: "E os aparelhos que não têm mais atualização de software?",
        content:
          "Na ON.LOC, trabalhamos com responsabilidade. Equipamentos sem atualização são direcionados apenas para usos compatíveis e controlados. Quando não atendem aos requisitos atuais de desempenho e segurança, são destinados ao reaproveitamento ou descarte consciente, sempre seguindo boas práticas.",
      },
      {
        id: "03",
        title: "Como é o processo de análise?",
        content:
          "Após a definição da solução, realizamos uma análise financeira para aprovação da locação. Esse processo é rápido e tem como objetivo garantir segurança e viabilidade para ambas as partes.",
      },
      {
        id: "04",
        title: "Quais formas de pagamento?",
        content:
          "Após a aprovação do orçamento, o faturamento é realizado conforme a locação contratada, com a primeira cobrança após 30 dias do recebimento do equipamento. Os boletos são gerados de acordo com os valores e prazos previamente aprovados, garantindo previsibilidade e organização financeira.",
      },
      {
        id: "05",
        title: "O que acontece ao final da minha assinatura?",
        content:
          "Ao final do contrato, você escolhe o melhor caminho: renovar, atualizar os equipamentos ou devolver. A ON.LOC cuida de todo o processo, incluindo a retirada dos equipamentos e o tratamento seguro dos dados, garantindo tranquilidade total que a norma da LGPD exige.",
      },
    ],
  },
  {
    name: "Desktop",
    image: desktop,
    description: "Performance sólida para o dia a dia corporativo.",
    gallery: [desktop, desktop2, desktop3, desktop4],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      {
        id: "01",
        title: "Como funciona?",
        content:
          "Contratar a ON.LOC é simples. Você pode nos informar a quantidade de equipamentos e a configuração desejada ou apenas descrever o que precisa no dia a dia. Com base nisso, indicamos a melhor solução disponível em nosso estoque, pronta para uso. Todos os equipamentos são entregues com Windows original e licenciado, garantindo segurança e confiabilidade desde o primeiro uso.",
      },
      {
        id: "02",
        title: "E os aparelhos que não têm mais atualização de software?",
        content:
          "Na ON.LOC, trabalhamos com responsabilidade. Equipamentos sem atualização são direcionados apenas para usos compatíveis e controlados. Quando não atendem aos requisitos atuais de desempenho e segurança, são destinados ao reaproveitamento ou descarte consciente, sempre seguindo boas práticas.",
      },
      {
        id: "03",
        title: "Como é o processo de análise?",
        content:
          "Após a definição da solução, realizamos uma análise financeira para aprovação da locação. Esse processo é rápido e tem como objetivo garantir segurança e viabilidade para ambas as partes.",
      },
      {
        id: "04",
        title: "Quais formas de pagamento?",
        content:
          "Após a aprovação do orçamento, o faturamento é realizado conforme a locação contratada, com a primeira cobrança após 30 dias do recebimento do equipamento. Os boletos são gerados de acordo com os valores e prazos previamente aprovados, garantindo previsibilidade e organização financeira.",
      },
      {
        id: "05",
        title: "O que acontece ao final da minha assinatura?",
        content:
          "Ao final do contrato, você escolhe o melhor caminho: renovar, atualizar os equipamentos ou devolver. A ON.LOC cuida de todo o processo, incluindo a retirada dos equipamentos e o tratamento seguro dos dados, garantindo tranquilidade total que a norma da LGPD exige.",
      },
    ],
  },
  {
    name: "Notebook",
    image: notebook,
    description:
      "Os notebooks corporativos são ideais para empresas que precisam de mobilidade sem abrir mão de desempenho. Atendem desde tarefas administrativas até operações mais exigentes, com autonomia, segurança e compatibilidade com ambientes empresariais.",
    gallery: [notebook, notebook2, notebook3, notebook4],
    includes: { cpu: true, monitor: false, cabo: true },
    faq: [
      {
        id: "01",
        title: "Como funciona?",
        content:
          "Contratar a ON.LOC é simples. Você pode nos informar a quantidade de equipamentos e a configuração desejada ou apenas descrever o que precisa no dia a dia. Com base nisso, indicamos a melhor solução disponível em nosso estoque, pronta para uso. Todos os equipamentos são entregues com Windows original e licenciado, garantindo segurança e confiabilidade desde o primeiro uso.",
      },
      {
        id: "02",
        title: "E os aparelhos que não têm mais atualização de software?",
        content:
          "Na ON.LOC, trabalhamos com responsabilidade. Equipamentos sem atualização são direcionados apenas para usos compatíveis e controlados. Quando não atendem aos requisitos atuais de desempenho e segurança, são destinados ao reaproveitamento ou descarte consciente, sempre seguindo boas práticas.",
      },
      {
        id: "03",
        title: "Como é o processo de análise?",
        content:
          "Após a definição da solução, realizamos uma análise financeira para aprovação da locação. Esse processo é rápido e tem como objetivo garantir segurança e viabilidade para ambas as partes.",
      },
      {
        id: "04",
        title: "Quais formas de pagamento?",
        content:
          "Após a aprovação do orçamento, o faturamento é realizado conforme a locação contratada, com a primeira cobrança após 30 dias do recebimento do equipamento. Os boletos são gerados de acordo com os valores e prazos previamente aprovados, garantindo previsibilidade e organização financeira.",
      },
      {
        id: "05",
        title: "O que acontece ao final da minha assinatura?",
        content:
          "Ao final do contrato, você escolhe o melhor caminho: renovar, atualizar os equipamentos ou devolver. A ON.LOC cuida de todo o processo, incluindo a retirada dos equipamentos e o tratamento seguro dos dados, garantindo tranquilidade total que a norma da LGPD exige.",
      },
    ],
  },
  {
    name: "Servidor",
    image: servidor,
    description:
      "Os servidores corporativos são a base da infraestrutura de TI, responsáveis por armazenar dados, hospedar sistemas e garantir disponibilidade e segurança da informação.",
    gallery: [servidor, servidor2, servidor3, servidor4],
    includes: { cpu: true, monitor: false, cabo: true },
    faq: [
      {
        id: "01",
        title: "Como funciona?",
        content:
          "Contratar a ON.LOC é simples. Você pode nos informar a quantidade de equipamentos e a configuração desejada ou apenas descrever o que precisa no dia a dia. Com base nisso, indicamos a melhor solução disponível em nosso estoque, pronta para uso. Todos os equipamentos são entregues com Windows original e licenciado, garantindo segurança e confiabilidade desde o primeiro uso.",
      },
      {
        id: "02",
        title: "E os aparelhos que não têm mais atualização de software?",
        content:
          "Na ON.LOC, trabalhamos com responsabilidade. Equipamentos sem atualização são direcionados apenas para usos compatíveis e controlados. Quando não atendem aos requisitos atuais de desempenho e segurança, são destinados ao reaproveitamento ou descarte consciente, sempre seguindo boas práticas.",
      },
      {
        id: "03",
        title: "Como é o processo de análise?",
        content:
          "Após a definição da solução, realizamos uma análise financeira para aprovação da locação. Esse processo é rápido e tem como objetivo garantir segurança e viabilidade para ambas as partes.",
      },
      {
        id: "04",
        title: "Quais formas de pagamento?",
        content:
          "Após a aprovação do orçamento, o faturamento é realizado conforme a locação contratada, com a primeira cobrança após 30 dias do recebimento do equipamento. Os boletos são gerados de acordo com os valores e prazos previamente aprovados, garantindo previsibilidade e organização financeira.",
      },
      {
        id: "05",
        title: "O que acontece ao final da minha assinatura?",
        content:
          "Ao final do contrato, você escolhe o melhor caminho: renovar, atualizar os equipamentos ou devolver. A ON.LOC cuida de todo o processo, incluindo a retirada dos equipamentos e o tratamento seguro dos dados, garantindo tranquilidade total que a norma da LGPD exige.",
      },
    ],
  },
  {
    name: "Workstation",
    image: workstation,
    description:
      "As workstations são projetadas para tarefas que exigem grande poder de processamento gráfico e computacional. Indicadas para profissionais que trabalham com softwares pesados e precisam de máxima performance e estabilidade.",
    gallery: [workstation, workstation2, workstation3, workstation4],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      {
        id: "01",
        title: "Como funciona?",
        content:
          "Contratar a ON.LOC é simples. Você pode nos informar a quantidade de equipamentos e a configuração desejada ou apenas descrever o que precisa no dia a dia. Com base nisso, indicamos a melhor solução disponível em nosso estoque, pronta para uso. Todos os equipamentos são entregues com Windows original e licenciado, garantindo segurança e confiabilidade desde o primeiro uso.",
      },
      {
        id: "02",
        title: "E os aparelhos que não têm mais atualização de software?",
        content:
          "Na ON.LOC, trabalhamos com responsabilidade. Equipamentos sem atualização são direcionados apenas para usos compatíveis e controlados. Quando não atendem aos requisitos atuais de desempenho e segurança, são destinados ao reaproveitamento ou descarte consciente, sempre seguindo boas práticas.",
      },
      {
        id: "03",
        title: "Como é o processo de análise?",
        content:
          "Após a definição da solução, realizamos uma análise financeira para aprovação da locação. Esse processo é rápido e tem como objetivo garantir segurança e viabilidade para ambas as partes.",
      },
      {
        id: "04",
        title: "Quais formas de pagamento?",
        content:
          "Após a aprovação do orçamento, o faturamento é realizado conforme a locação contratada, com a primeira cobrança após 30 dias do recebimento do equipamento. Os boletos são gerados de acordo com os valores e prazos previamente aprovados, garantindo previsibilidade e organização financeira.",
      },
      {
        id: "05",
        title: "O que acontece ao final da minha assinatura?",
        content:
          "Ao final do contrato, você escolhe o melhor caminho: renovar, atualizar os equipamentos ou devolver. A ON.LOC cuida de todo o processo, incluindo a retirada dos equipamentos e o tratamento seguro dos dados, garantindo tranquilidade total que a norma da LGPD exige.",
      },
    ],
  },
];

export function Equipamentos() {
  const [selectedCategory, setSelectedCategory] = useState("Minidesk");
  const [selectedItem, setSelectedItem] = useState(mockItem[0]);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);

    const found = mockItem.find(
      (item) => item.name.toLowerCase() === categoryName.toLowerCase(),
    );

    if (found) {
      setSelectedItem(found);
    }
  };

  return (
    <Page>
      <BlackHeader />
      <HeaderBanner text="Equipamentos" backgroundImage={bgImage} />

      <EquipamentoFilter
        selected={selectedCategory}
        setSelected={handleCategoryChange}
      />

      <ViewerSection>
        <EquipamentoViewer item={selectedItem} />
      </ViewerSection>

      <DetailsSection>
        <EquipamentoDetalhesInfo item={selectedItem} />
        <Title>Perguntas Frequentes:</Title>
        <FAQ data={selectedItem.faq} />
      </DetailsSection>

      <EquipamentoBannerFooter />
      <Footer />
    </Page>
  );
}
