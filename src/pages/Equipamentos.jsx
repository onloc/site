import { useState } from "react";

import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import EquipamentoBanner from "../components/EquipamentoBanner";
import EquipamentoFilter from "../components/EquipamentoFilter";
import EquipamentoCard from "../components/EquipamentoCard";

import desktop from "../assets/mock-produto.png";
import servidor from "../assets/servidor.png";
import notebook from "../assets/notebook.png";
import workstation from '../assets/workstation.png'
import EquipamentoBannerFooter from "../components/EquipamentoBannerFooter";

const mockItem = [
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Desktop",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [servidor, notebook, workstation, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Servidores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Desktop",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Desktop",
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
      <EquipamentoBanner />
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
