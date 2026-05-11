import { useEffect, useRef, useState } from "react";
import BlackHeader from "../../components/BlackHeader";
import Footer from "../../components/Footer";

import bannerequipment from "../../assets/banner-equipment.png";
import bannerequipment2 from "../../assets/banner-equipment-2.png";
import bannerequipment3 from "../../assets/banner-equipment-3.png";

import screen from "../../assets/Equipamentos-Site-2026/Monitor/imgi_67_Monitor-Hp-Series-5-Pro-24-Fhd-Usb-c-Com-Webcam-Pop-up-5mp-udio-Com-Ia-100w-Power-Delivery-E-Design-Sustent-vel_1776256732.png";
import note from "../../assets/Equipamentos-Site-2026/Note/imgi_7_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256735.png";
import server from "../../assets/Equipamentos-Site-2026/NoteWork/imgi_5_dell-pro-max-mb16250nt-laptop-c-22040rf115-bk-ir.png";

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
      sideImage: note,
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
      sideImage: screen,
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
      sideImage: server,
      textColor: "white",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const intervalRef = useRef();

  const formRef = useRef(null);

  const scrollToForm = () => {
    const element = document.getElementById("form-section");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppRedirect = () => {
    window.open(
      "https://wa.me/551930236697",
      "_blank",
    );
  };



  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextBanner();
    }, 7000);
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
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
                <Banner
                  {...banner}
                  onNext={nextBanner}
                  onPrev={prevBanner}
                  onScrollToForm={handleWhatsAppRedirect}
                />
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

        <FormContainer ref={formRef} />

        <Footer />
      </PageWrapper>
    </>
  );
}
