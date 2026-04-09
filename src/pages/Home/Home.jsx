import { useEffect, useRef, useState } from "react";
import BlackHeader from "../../components/BlackHeader";
import Footer from "../../components/Footer";

import bannerequipment from "../../assets/banner-equipment.png";
import bannerequipment2 from "../../assets/banner-equipment-2.png";
import bannerequipment3 from "../../assets/banner-equipment-3.png";

import imageCard1 from "../../assets/content-image-1.png";
import imageCard2 from "../../assets/content-image-2.png";
import imageCard3 from "../../assets/content-image-3.png";
import imageCard4 from "../../assets/content-image-4.png";

import bluebanner from "../../assets/blue-banner.png";
import Banner from "../../components/Banner";
import {
  Slider,
  SliderTrack,
  Slide,
  Container,
  Title,
  Subtitle,
  PageWrapper,
} from "./styles";
import OurNumbers from "../../components/OurNumbers";
import HomeSlider from "../../components/HomeSlider";
import WhyLeaseComponent from "../../components/WhyLease";
import EquipamentsGallery from "../../components/EquipamentsGallery";
import WhatWeCanDo from "../../components/WhatWeCanDo";
import FormContainer from "../../components/FormContainer";
import ComponentRecommendations from "../../components/ComponentRecommendations";
import EquipamentLease from "../../components/EquipamentLease";
import FAQ from "../../components/FAQ";
import HomeQuestions from "../../components/HomeQuestions";
import EquipamentoBannerFooter from "../../components/EquipamentoBannerFooter";
import ClientComments from "../../components/ClientComments";
import ClientsBar from "../../components/ClientsBar";

export function Home() {
  const cards = [
    {
      title: "Tecnologia para Empresas",
      description:
        "Alugar ou comprar? Descubra o que vale mais a pena para sua empresa em 2025",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d"],
      image: imageCard1,
      category: "Tecnologia",
    },
    {
      title: "Gestão de Equipamentos",
      description:
        "Como a locação reduz custos com TI e melhora a produtividade",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c"],
      image: imageCard2,
      category: "Tecnologia",
    },
    {
      title: "Assistência Técnica",
      description:
        "5 sinais de que seus equipamentos precisam de manutenção preventiva",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b"],
      image: imageCard3,
      category: "Tecnologia",
    },
    {
      title: "Eficiência Operacional",
      description:
        "Por que empresas de logística e call center estão adotando locação em larga escala",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d", "e"],
      image: imageCard4,
      category: "Tecnologia",
    },

    {
      title: "Eficiência Operacional",
      description:
        "Por que empresas de logística e call center estão adotando locação em larga escala",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d", "e"],
      image: imageCard4,
      category: "Tecnologia",
    },
    {
      title: "Eficiência Operacional",
      description:
        "Por que empresas de logística e call center estão adotando locação em larga escala",
      date: "Out 30, 2024",
      author: "Equipe Onloc",
      comments: ["a", "b", "c", "d", "e"],
      image: imageCard4,
      category: "Tecnologia",
    },
  ];

  const banners = [
    {
      banner: 0,
      bannerImage: bluebanner,
      title: "Tecnologia sob medida para o seu negócio",
      subtitle:
        "A melhor opção para Locação de Computadores, Notebooks, Servidores e Soluções Inteligentes para sua Empresa na região de Campinas.",
      buttonText: "Quero alugar",
      buttonStyle: {
        color: "#3c54a4",
        background: "linear-gradient(90deg,#FFFFFF,#CDEAFF)",
      },
      sideImage: bannerequipment,
      textColor: "white",
    },
    {
      banner: 1,
      backgroundColor: "white",
      title: "Tecnologia sob medida para o seu negócio",
      subtitle:
        "A melhor opção para Locação de Computadores, Notebooks, Servidores e Soluções Inteligentes para sua Empresa na região de Campinas.",
      buttonText: "Quero alugar",
      buttonStyle: {
        color: "white",
        background: "linear-gradient(90deg,#014575,#497FA6)",
      },
      sideImage: bannerequipment2,
      textColor: "black",
      socialBarColor: "blue",
    },
    {
      banner: 2,
      bannerImage: bluebanner,
      title: "Tecnologia sob medida para o seu negócio",
      subtitle:
        "A melhor opção para Locação de Computadores, Notebooks, Servidores e Soluções Inteligentes para sua Empresa na região de Campinas.",
      buttonText: "Quero alugar",
      buttonStyle: {
        color: "#3c54a4",
        background: "linear-gradient(90deg,#FFFFFF,#CDEAFF)",
      },
      sideImage: bannerequipment3,
      textColor: "white",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextBanner();
    }, 7000);
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    startAutoSlide();
  };

  return (
    <>
      <PageWrapper>
        <BlackHeader />
        <Slider>
          <SliderTrack
            style={{
              transform: `translateX(-${currentBanner * 100}%)`,
            }}
          >
            {banners.map((banner, index) => (
              <Slide key={index}>
                <Banner {...banner} onNext={nextBanner} onPrev={prevBanner} />
              </Slide>
            ))}
          </SliderTrack>
        </Slider>

        <OurNumbers />

        <Container $margin="128px auto 64px auto">
          <Title>Nossos Equipamentos</Title>
          <Subtitle>
            Indicados para ambientes administrativos, call centers e estações
            fixas com pouco espaço, os mini desktops oferecem desempenho
            estável, baixo consumo de energia e fácil integração à
            infraestrutura de TI da empresa.
          </Subtitle>
        </Container>

        <HomeSlider />

        <WhyLeaseComponent />

        <Container $margin="80px auto 64px auto">
          <Title>Oferecemos a solução que sua empresa necessita.</Title>
          <Subtitle>
            Seja alugando uma única máquina ou todo seu parque, oferecemos
            soluções que se encaixam na sua necessidade.
          </Subtitle>
        </Container>

        <EquipamentsGallery />

        <WhatWeCanDo />

        <ComponentRecommendations />

        <EquipamentLease />

        <HomeQuestions />

        <EquipamentoBannerFooter />

        <ClientComments />

        <ClientsBar />

        <FormContainer />

        <Footer />
      </PageWrapper>
    </>
  );
}
