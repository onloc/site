import { useEffect, useState } from "react";
import ContentCard from "../ContentCard";

import arrowLeft from "../../assets/slider-arrow-left.png";
import arrowRight from "../../assets/slider-arrow-right.png";

import image1 from "../../assets/content-image-1.png";
import image2 from "../../assets/content-image-2.png";
import image3 from "../../assets/content-image-3.png";
import image4 from "../../assets/content-image-4.png";

import {
  SliderContainer,
  SliderTrack,
  Arrow,
  SliderViewport,
  ArrowsContainer,
  DotsContainer,
  Dot,
} from "./styles";

function ContentSlider() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const data = [
    {
      title: "Tecnologia para Empresas",
      description:
        "Alugar ou comprar? Descubra o que vale mais a pena para sua empresa em 2025",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d"],
      image: image1,
      category: "Tecnologia",
    },
    {
      title: "Gestão de Equipamentos",
      description:
        "Como a locação reduz custos com TI e melhora a produtividade",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c"],
      image: image2,
      category: "Tecnologia",
    },
    {
      title: "Assistência Técnica",
      description:
        "5 sinais de que seus equipamentos precisam de manutenção preventiva",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b"],
      image: image3,
      category: "Tecnologia",
    },
    {
      title: "Eficiência Operacional",
      description:
        "Por que empresas de logística e call center estão adotando locação em larga escala",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d", "e"],
      image: image4,
      category: "Tecnologia",
    },

    {
      title: "Eficiência Operacional",
      description:
        "Por que empresas de logística e call center estão adotando locação em larga escala",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d", "e"],
      image: image4,
      category: "Tecnologia",
    },
    {
      title: "Eficiência Operacional",
      description:
        "Por que empresas de logística e call center estão adotando locação em larga escala",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d", "e"],
      image: image4,
      category: "Tecnologia",
    },
  ];

  const totalDots = data.length - visibleItems + 1;

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
    setIndex((prev) => (prev >= data.length - visibleItems ? prev : prev + 1));
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
            {data.map((item, i) => (
              <ContentCard key={i} item={item} />
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

export default ContentSlider;
