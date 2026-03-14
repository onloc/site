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
import ContentSlider from "../components/ContentSlider";

export function Suporte() {
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

      <div
        style={{
          margin: "120px auto 40px auto",
          width: "622px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          colorText="#1E1E20"
          variant="Quicksand"
          fontSize="40px"
          fontWeight="500"
        >
          Nossos conteúdos
        </Typography>
        <Typography
          variant="Montserrat"
          colorText="#0E1017"
          fontSize="16px"
          fontWeight="400"
        >
          Em nosso blog você encontra notícias, dicas e artigos sobre assuntos
          ligados a tecnologia de modo geral.
        </Typography>
      </div>

      <div
        style={{
          margin: "120px auto 40px auto",
        }}
      >
        {/* <ContentSlider /> */}
      </div>

      <FormContainer />
      <Footer />
    </>
  );
}
