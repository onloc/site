import React from "react";
import BlackHeader from "../../components/BlackHeader";
import Footer from "../../components/Footer";
import SocialBar from "../../components/SocialBar";

import BannerEquipment from "../../assets/banner-equipment.png";
import BlueBanner from "../../assets/blue-banner.png";
import Banner from "../../components/Banner";

export function Home() {
  return (
    <>
      <BlackHeader />
      <SocialBar />

      <Banner
        bannerImage={BlueBanner}
        title="Tecnologia sob medida para o seu negócio"
        subtitle="A melhor opção para Locação de Computadores, Notebooks, Servidores e Soluções Inteligentes para sua Empresa na região de Campinas."
        buttonText="Quero alugar"
        buttonStyle={{
          color: "#3c54a4",
          background: "linear-gradient(90deg,#FFFFFF,#CDEAFF)",
        }}
        sideImage={BannerEquipment}
        textColor="white"
      />

      <Footer />
    </>
  );
}
