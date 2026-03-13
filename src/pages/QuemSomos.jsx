import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import HeaderBanner from "../components/HeaderBanner";

import bgImage from "../assets/who-we-are-banner.png";
import rentalImage from "../assets/rental-image.png";
import whyOnloc from "../assets/why-onloc.png";
import videoFlavor from "../assets/video-flavor.png";

import Typography from "../components/Typography";
import ButtonComponent from "../components/ButtonComponent";
import OurNumbers from "../components/OurNumbers";
import WhyLease from "../components/WhyLease";
import ClientComments from "../components/ClientComments";
import EquipamentoBannerFooter from "../components/EquipamentoBannerFooter";
import TimeLine from "../components/TimeLine";

export function QuemSomos() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#EFF2F3" }}>
      <BlackHeader />
      <HeaderBanner text="Quem Somos" backgroundImage={bgImage} />
      <div
        style={{
          padding: "20px",
          margin: "120px 150px auto 100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "24px",
          textAlign: "justify",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: "1",
            maxWidth: "592px",
          }}
        >
          <Typography
            variant="Quicksand"
            fontSize="40px"
            fontWeight="500"
            fontStyle="Medium"
            colorText="##1E1E20"
          >
            Locação de Equipamentos
          </Typography>
          <Typography variant="Montserrat" fontSize="16px" colorText="#0E1017">
            Presente no mercado há 10 anos, a ON.LOC através da qualidade
            promove o crescimento e maiores resultados, aumentando a
            produtividade dos nossos clientes através da entrega de qualidade e
            soluções corporativas em tecnologias inovadoras e fáceis de usar.
          </Typography>
          <div
            style={{ background: "#fff", padding: "24px", borderRadius: "8px" }}
          >
            <Typography
              variant="Montserrat"
              fontSize="16px"
              colorText="#4C5258"
            >
              Com equipamentos de alta performance e o know-how de uma equipe
              especializada, a ON.LOC entrega aos clientes tecnologia, inovação
              e a tranquilidade do outsourcing, permitindo que suas equipes
              possam se dedicar a outros trabalhos, essenciais para o
              desenvolvimento do seu negócio.
            </Typography>
          </div>
          <ButtonComponent
            text="Quero Alugar"
            style={{ width: "249px" }}
            func={() => navigate("/equipamentos")}
          />
        </div>
        <div style={{ flex: "1" }}>
          <img
            src={rentalImage}
            alt="Imagem de aluguel de equipamentos"
            style={{ width: "100%", maxWidth: "587px" }}
          />
        </div>
      </div>
      <OurNumbers />
      <div
        style={{
          filter: "drop-shadow(0 0 1px #AAAAAA) drop-shadow(0 0 0.5px #AAAAAA)",
        }}
      >
        <div
          style={{
            backgroundColor: "#EFF2F3", // Necessário para a sombra ter onde "encostar"
            marginLeft: "40px",
            marginTop: "120px",
            width: "calc(100% - 40px)",
            clipPath: "polygon(150px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100px)",
          }}
        >
          <img
            src={videoFlavor}
            alt="Imagem sabor vídeo"
            style={{
              display: "block",
              marginLeft: "140px",
              maxWidth: "calc(100% - 140px)",
              maxHeight: "585px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          margin: "120px 150px auto 100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "24px",
          textAlign: "justify",
        }}
      >
        <div style={{ flex: "1" }}>
          <img
            src={whyOnloc}
            alt="Imagem de aluguel de equipamentos"
            style={{ width: "100%", maxWidth: "587px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: "1",
            maxWidth: "592px",
          }}
        >
          <Typography
            variant="Quicksand"
            fontSize="40px"
            fontWeight="500"
            fontStyle="Medium"
            colorText="##1E1E20"
          >
            Por que escolher a On.Loc?
          </Typography>
          <Typography variant="Montserrat" fontSize="16px" colorText="#0E1017">
            Nosso time de especialistas realiza um amplo estudo sobre as
            necessidades do seu negócio, e com toda a nossa expertise,
            identificamos os equipamentos e os adequamos para atender às
            necessidades da sua empresa.
          </Typography>
          <Typography variant="Montserrat" fontSize="16px" colorText="#0E1017">
            Otimizamos os processos do seu negócio com tecnologia sempre
            atualizada, suporte técnico especializado e soluções personalizadas.
          </Typography>
          <Typography variant="Montserrat" fontSize="16px" colorText="#0E1017">
            Estamos falando do futuro, entregando a mais alta performance no
            presente. Estamos falando da ON.LOC.
          </Typography>
          <ButtonComponent
            text="Quero Alugar"
            style={{ width: "249px" }}
            func={() => navigate("/equipamentos")}
          />
        </div>
      </div>
      <WhyLease />
      <TimeLine />
      <EquipamentoBannerFooter />
      <ClientComments />
      <Footer />
    </div>
  );
}
