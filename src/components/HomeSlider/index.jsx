import { useEffect, useState } from "react";
import HomeCard from "../HomeEquipmentCard";

import miniDesk from "../../assets/Equipamentos-Site-2026/Minidesk/imgi_21_yq7rqz1e8o9ozgrcn4t71w1qzpxzfo327531.png";
import notebook from "../../assets/Equipamentos-Site-2026/Note/imgi_7_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256735.png";
import workstation from "../../assets/equipamentos-2026/WORKSTATION HP Z2 G4 TOWER XEON E-2144G.webp"; 
import notework from "../../assets/equipamentos-2026/NOTEBOOK WORKSTATION HP ZBOOK FURY 15 G7 I7-10850H 1.webp";
import server from "../../assets/Equipamentos-Site-2026/Servidores/imgi_3_server-poweredge-t560-silver-gallery-5.png";
import screen from "../../assets/Equipamentos-Site-2026/Monitor/imgi_67_Monitor-Hp-Series-5-Pro-24-Fhd-Usb-c-Com-Webcam-Pop-up-5mp-udio-Com-Ia-100w-Power-Delivery-E-Design-Sustent-vel_1776256732.png";

import arrowLeft from "../../assets/slider-arrow-left.png";
import arrowRight from "../../assets/slider-arrow-right.png";

import {
  SliderContainer,
  SliderTrack,
  Arrow,
  SliderViewport,
  ArrowsContainer,
  DotsContainer,
  Dot,
} from "./styles";

function HomeSlider({ onScrollToForm }) {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const items = [
    {
      image: miniDesk,
      title: "Mini Desktops",
      text: "Indicados para ambientes administrativos, call centers e estações fixas com pouco espaço, os mini desktops oferecem desempenho estável, baixo consumo de energia e fácil integração à infraestrutura de TI da empresa.",
    },
    {
      image: notebook,
      title: "Notebooks",
      text: "Os notebooks corporativos são ideais para empresas que precisam de mobilidade sem abrir mão de desempenho. Atendem desde tarefas administrativas até operações mais exigentes, com autonomia, segurança e compatibilidade com ambientes empresariais.",
    },
    {
      image: workstation,
      title: "Workstations",
      text: "As workstations são projetadas para tarefas que exigem grande poder de processamento gráfico e computacional. Indicadas para profissionais que trabalham com softwares pesados e precisam de máxima performance e estabilidade.",
    },
    {
      image: notework,
      title: "NoteWorks",
      text: "Os netbooks corporativos atendem operações básicas que demandam mobilidade e acesso rápido a sistemas, com foco em custo-benefício e facilidade de uso.",
    },
    {
      image: server,
      title: "Servidores",
      text: "Os servidores corporativos são a base da infraestrutura de TI, responsáveis por armazenar dados, hospedar sistemas e garantir disponibilidade e segurança da informação.",
    },
    {
      image: screen,
      title: "Monitores",
      text: "Os monitores corporativos melhoram a ergonomia e aumentam a produtividade, especialmente em operações que utilizam múltiplas janelas ou mais de uma tela.",
    },
  ];

  const totalDots = items.length - visibleItems + 1;

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setVisibleItems(1);
      } else if (width <= 768) {
        setVisibleItems(2);
      } else if (width <= 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const next = () => {
    setIndex((prev) => (prev >= items.length - visibleItems ? prev : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  return (
    <>
      <SliderContainer>
        <SliderViewport>
          <SliderTrack
            style={{
              transform: `translateX(-${index * 324}px)`,
            }}
          >
            {items.map((item, i) => (
              <HomeCard
                key={i}
                image={item.image}
                title={item.title}
                text={item.text}
                onScrollToForm={onScrollToForm}
              />
            ))}
          </SliderTrack>
        </SliderViewport>
      </SliderContainer>

      <ArrowsContainer>
        <Arrow onClick={prev}>
          <img src={arrowLeft} alt="Anterior" />
        </Arrow>

        <DotsContainer>
          {Array.from({ length: totalDots }).map((_, i) => (
            <Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
          ))}
        </DotsContainer>

        <Arrow onClick={next}>
          <img src={arrowRight} alt="Próximo" />
        </Arrow>
      </ArrowsContainer>
    </>
  );
}

export default HomeSlider;
