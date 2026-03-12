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

function HomeSlider() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const images = [
    desk1,
    desk2,
    screen,
    server,
    work,
    desk1,
    desk2,
    screen,
    server,
    work,
  ];

  const totalDots = images.length - visibleItems + 1;

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
    setIndex((prev) =>
      prev >= images.length - visibleItems ? prev : prev + 1,
    );
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
            {images.map((img, i) => (
              <HomeCard key={i} image={img} />
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
