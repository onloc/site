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
    description: "Configuração ultra compacta para escritórios modernos.",
    gallery: [minidesk, minidesk2, minidesk3, minidesk4],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
      { id: "03", title: "Dúvida sobre hardware", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Desktop",
    image: desktop,
    description: "Performance sólida para o dia a dia corporativo.",
    gallery: [desktop, desktop2, desktop3, desktop4],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Notebook",
    image: notebook,
    description: "Mobilidade e potência com a linha HP Zbook.",
    gallery: [notebook, notebook2, notebook3, notebook4],
    includes: { cpu: true, monitor: false, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Servidor",
    image: servidor,
    description: "Infraestrutura robusta com Dell PowerEdge.",
    gallery: [servidor, servidor2, servidor3, servidor4],
    includes: { cpu: true, monitor: false, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Workstation",
    image: workstation,
    description:
      "Estação de trabalho de alto desempenho para projetos complexos.",
    gallery: [workstation, workstation2, workstation3, workstation4],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
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
