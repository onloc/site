import { useState } from "react";

import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import HeaderBanner from "../components/HeaderBanner";
import EquipamentoFilter from "../components/EquipamentoFilter";
import EquipamentoCard from "../components/EquipamentoCard";

import desktop from "../assets/mock-produto.png";
import minidesk from "../assets/equipamentos-2026/DESK MINI DELL OPTIPLEX 3000 I3-12100T.jpg"
import desktop2 from "../assets/equipamentos-2026/DESKTOP DELL SFF OPTIPLEX 3080 I5-10500.webp"
import zbook from "../assets/equipamentos-2026/HpZbookFury15G7-side22_1382x.webp"
import elitebook from "../assets/equipamentos-2026/NOTEBOOK HP ELITEBOOK 840 G7 I5-10310U.png"
import zbook2 from "../assets/equipamentos-2026/NOTEBOOK WORKSTATION HP ZBOOK FURY 15 G7 I7-10850H 1.webp"
import poweredge from "../assets/equipamentos-2026/SERVIDOR DELL POWEREDGE R540 2X XEON GOLD 6138 1.webp" 
import poweredge2 from "../assets/equipamentos-2026/SERVIDOR DELL POWEREDGE T440 2X XEON GOLD 6138.png"
import thinksystem from "../assets/equipamentos-2026/SERVIDOR LENOVO THINKSYSTEM SR630 2X XEON GOLD 6138 1.png";
import z2tower from "../assets/equipamentos-2026/WORKSTATION HP Z2 G4 TOWER XEON E-2144G.webp";
import EquipamentoBannerFooter from "../components/EquipamentoBannerFooter";
import bgImage from "../assets/retangle-banner.png";

const mockItem = [
  {
    name: "OPTIPLEX 3000 I3-12100T",
    image: minidesk,
    category: "Minidesks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "SFF OPTIPLEX 3080 I5-10500",
    image: desktop2,
    category: "Desktop",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "ZBOOK FURY 15 G7 I7-10850H",
    image: zbook,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "ELITEBOOK 840 G7 I5-10310U",
    image: elitebook,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "ZBOOK FURY 15 G7 I7-10850H",
    image: zbook2,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "POWEREDGE R540 2X XEON GOLD 6138",
    image: poweredge,
    category: "Servidores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "POWEREDGE T440 2X XEON GOLD 6138",
    image: poweredge2,
    category: "Servidores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "THINKSYSTEM SR630 2X XEON GOLD 6138",
    image: thinksystem,
    category: "Servidores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Z2 G4 TOWER XEON E-2144G",
    image: z2tower,
    category: "Workstation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
];

export function Equipamentos() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = selectedCategory
    ? mockItem.filter((item) => item.category === selectedCategory)
    : mockItem;

  return (
    <div>
      <BlackHeader />
      <HeaderBanner text="Equipamentos" backgroundImage={bgImage}/>
      <EquipamentoFilter
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          background: "#eff2f3",
          padding: "100px 150px",
        }}
      >
        <>
          {filteredItems.map((item, index) => (
            <EquipamentoCard key={index} item={item} />
          ))}
          {filteredItems.length === 0 && <p>Nenhum equipamento encontrado.</p>}
        </>
      </div>
      <EquipamentoBannerFooter />
      <Footer />
    </div>
  );
}
