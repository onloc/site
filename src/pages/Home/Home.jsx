import { useEffect, useState } from "react";
import BlackHeader from "../../components/BlackHeader";
import Footer from "../../components/Footer";

import bannerequipment from "../../assets/banner-equipment.png";
import bannerequipment2 from "../../assets/banner-equipment-2.png";
import bannerequipment3 from "../../assets/banner-equipment-3.png";

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
  const banners = [
    {
      banner: 1,
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
      banner: 2,
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
      banner: 3,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

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
                <Banner {...banner} />
              </Slide>
            ))}
          </SliderTrack>
        </Slider>

        <OurNumbers />

        <Container $margin="128px auto 64px auto">
          <Title>Nossos Equipamentos</Title>
          <Subtitle>
            Equipamentos ideais para a sua empresa. MiniDesks e Desktops das
            marcas mais conceituadas do mercado, adquiridos de grandes
            fabricantes como HP, DELL & Lenovo.
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

        <Footer />
      </PageWrapper>
    </>
  );
}
