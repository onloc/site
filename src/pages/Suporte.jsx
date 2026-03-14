import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import HeaderBanner from "../components/HeaderBanner";
import FormContainer from "../components/FormContainer";
import Typography from "../components/Typography";

import bgImage from "../assets/banner-solucoes.jpg";
import softwareSuporte from "../assets/software-suporte.png";
import garantiaSuporte from "../assets/garantia-de-suporte.png";
import relatoTraumec from "../assets/relato-traumec.png";
import experiencia13Anos from "../assets/13-anos-experiencia.png";

import image1 from "../assets/content-image-1.png";
import image2 from "../assets/content-image-2.png";
import image3 from "../assets/content-image-3.png";
import image4 from "../assets/content-image-4.png";

export function Suporte() {
  const cards = [
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
  return (
    <>
      <BlackHeader />
      <HeaderBanner text="Suporte" backgroundImage={bgImage} fontWeight="500" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "120px 300px",
        }}
      >
        <Typography variant="Quicksand" fontSize="48px" fontWeight="500">
          Conte com nosso suporte
        </Typography>
        <Typography variant="Montserrat" colorText="#1E1E20">
          Entendemos que problemas acontecem, e vários deles podem ser
          resolvidos com alguns pequenos passos. Nosso objetivo é garantir
          tranquilidade para sua empresa, se surgirem dúvidas ou problemas com
          os equipamentos, entre em contato conosco para procedermos com a
          melhor solução.
        </Typography>

        <Typography variant="Montserrat" colorText="#1E1E20">
          Em situações de urgência, nosso suporte ágil entregará à sua empresa
          uma solução ideal em até 8 horas úteis.
        </Typography>

        <Typography
          style={{ textDecoration: "underline", cursor: "pointer" }}
          variant="Montserrat"
          colorText="#014C80"
        >
          Abra um Chamado
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          gap: "32px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img src={experiencia13Anos} alt="13 Anos de Experiência" />
        <img src={relatoTraumec} alt="Relato Traumec" />
        <img src={garantiaSuporte} alt="Garantia de Suporte" />
      </div>

      <div
        style={{
          margin: "100px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img src={softwareSuporte} alt="Software de Suporte" />
      </div>

      <FormContainer />
      <Footer />
    </>
  );
}
