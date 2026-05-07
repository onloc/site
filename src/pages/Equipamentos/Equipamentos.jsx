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
import desktop from "../../assets/mock-produto.png";
import minidesk from "../../assets/equipamentos-2026/DESK MINI DELL OPTIPLEX 3000 I3-12100T.jpg";
import desktop2 from "../../assets/equipamentos-2026/DESKTOP DELL SFF OPTIPLEX 3080 I5-10500.webp";
import zbook from "../../assets/equipamentos-2026/HpZbookFury15G7-side22_1382x.webp";
import poweredge from "../../assets/equipamentos-2026/SERVIDOR DELL POWEREDGE R540 2X XEON GOLD 6138 1.webp";
import z2tower from "../../assets/equipamentos-2026/WORKSTATION HP Z2 G4 TOWER XEON E-2144G.webp";
import bgImage from "../../assets/retangle-banner.png";

const mockItem = [
  {
    name: "Minidesk",
    image: minidesk,
    description: "Configuração ultra compacta para escritórios modernos.",
    gallery: [minidesk, minidesk, minidesk, minidesk],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
      { id: "03", title: "Dúvida sobre hardware", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Desktop",
    image: desktop2,
    description: "Performance sólida para o dia a dia corporativo.",
    gallery: [desktop2, desktop, desktop2, desktop],
    includes: { cpu: true, monitor: true, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Notebook",
    image: zbook,
    description: "Mobilidade e potência com a linha HP Zbook.",
    gallery: [zbook, zbook, zbook, zbook],
    includes: { cpu: true, monitor: false, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Servidor",
    image: poweredge,
    description: "Infraestrutura robusta com Dell PowerEdge.",
    gallery: [poweredge, poweredge, poweredge, poweredge],
    includes: { cpu: true, monitor: false, cabo: true },
    faq: [
      { id: "01", title: "Como funciona?", content: "Conteúdo aqui..." },
      { id: "02", title: "Dúvida sobre software", content: "Conteúdo aqui..." },
    ],
  },
  {
    name: "Workstation",
    image: z2tower,
    description:
      "Estação de trabalho de alto desempenho para projetos complexos.",
    gallery: [z2tower, z2tower, z2tower, z2tower],
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
