import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";

import bgImage from "../assets/banner-solucoes.jpg";
import HeaderBanner from "../components/HeaderBanner";

export function Solucoes() {
  return (
    <>
      <BlackHeader />
      <HeaderBanner text="Soluções" backgroundImage={bgImage} />

      <Footer />
    </>
  );
}
