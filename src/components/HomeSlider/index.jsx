import { useEffect, useState } from "react";
import HomeCard from "../HomeEquipmentCard";

import desk1 from "../../assets/card/desk.png";
import desk2 from "../../assets/card/desk2.png";
import screen from "../../assets/card/screen.png";
import server from "../../assets/card/server.png";
import work from "../../assets/card/work.png";

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
      image: desk1,
      title: "Mini Desktops",
      text: "Indicados para ambientes administrativos, call centers e estações fixas com pouco espaço, os mini desktops oferecem desempenho estável, baixo consumo de energia e fácil integração à infraestrutura de TI da empresa.",
    },
    {
      image: desk1,
      title: "Notebooks",
      text: "Os notebooks corporativos são ideais para empresas que precisam de mobilidade sem abrir mão de desempenho. Atendem desde tarefas administrativas até operações mais exigentes, com autonomia, segurança e compatibilidade com ambientes empresariais.",
    },
    {
      image: desk2,
      title: "Workstations",
      text: "As workstations são projetadas para tarefas que exigem grande poder de processamento gráfico e computacional. Indicadas para profissionais que trabalham com softwares pesados e precisam de máxima performance e estabilidade.",
    },
    {
      image: screen,
      title: "NoteWorks",
      text: "Os netbooks corporativos atendem operações básicas que demandam mobilidade e acesso rápido a sistemas, com foco em custo-benefício e facilidade de uso.",
    },
    {
      image: server,
      title: "Servidores",
      text: "Os servidores corporativos são a base da infraestrutura de TI, responsáveis por armazenar dados, hospedar sistemas e garantir disponibilidade e segurança da informação.",
    },
    {
      image: work,
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
