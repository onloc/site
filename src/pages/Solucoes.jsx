import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import HeaderBanner from "../components/HeaderBanner";
import ClientComments from "../components/ClientComments";
import EquipamentoBannerFooter from "../components/EquipamentoBannerFooter";
import Typography from "../components/Typography";
import EquipamentLease from "../components/EquipamentLease";

import bgImage from "../assets/banner-solucoes.jpg";
import cursor from "../assets/highlight_mouse_cursor.svg";
import data from "../assets/data_loss_prevention.svg";
import laptop from "../assets/laptop.svg";
import serviceDeskBanner from "../assets/service-desk-banner.png";
import techonologyBanner from "../assets/techonology-banner.png";

export function Solucoes() {
  return (
    <>
      <BlackHeader />
      <HeaderBanner
        text="Soluções"
        backgroundImage={bgImage}
        fontWeight="500"
      />
      <div style={{ padding: "100px 150px 100px 150px" }}>
        <div
          style={{
            width: "666px",
            marginBottom: "100px",
          }}
        >
          <Typography variant="Quicksand" fontSize="48px">
            Soluções inteligentes, resultados reais: descubra por que escolher a
            ON.LOC
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            width: "1216px",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "32px",
          }}
        >
          <div style={{ width: "383px" }}>
            <img
              src={cursor}
              alt="Cursor"
              style={{ width: "24px", height: "24px" }}
            />
            <Typography
              variant="Quicksand"
              fontSize="18px"
              fontWeight="500"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            >
              Melhor Custo x Benefício
            </Typography>
            <Typography variant="Montserrat" fontSize="16px" fontWeight="400">
              Com a locação de computadores, você pode investir o capital da sua
              empresa em desenvolvimento e novas oportunidades, isso sem perder
              a eficiência tecnológica, garantindo tranquilidade para seus
              colaboradores.
            </Typography>
          </div>
          <div style={{ width: "383px" }}>
            <img
              src={laptop}
              alt="Laptop"
              style={{ width: "24px", height: "24px" }}
            />
            <Typography
              variant="Quicksand"
              fontSize="18px"
              fontWeight="500"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            >
              Suporte Técnico Ágil
            </Typography>
            <Typography variant="Montserrat" fontSize="16px" fontWeight="400">
              Nossa equipe especializada está sempre pronta para substituir e
              atualização os equipamentos, eliminando assim o período ocioso e
              improdutivo que o seu colaborador teria durante um reparo. Nosso
              suporte mantém a tecnologia da sua empresa
            </Typography>
          </div>
          <div style={{ width: "383px" }}>
            <img
              src={data}
              alt="Data Loss Prevention"
              style={{ width: "24px", height: "24px" }}
            />
            <Typography
              variant="Quicksand"
              fontSize="18px"
              fontWeight="500"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            >
              Redução Fiscal
            </Typography>
            <Typography variant="Montserrat" fontSize="16px" fontWeight="400">
              Os valores investidos com o aluguel de computadores podem ser
              deduzidos no Imposto de Renda da Empresa em até 40%. Reduza os
              custos de sua empresa mantendo a funcionabilidade e otimize seus
              recursos.
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "32px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <img
          src={serviceDeskBanner}
          alt="Imagem de service desk"
          style={{
            flex: 1,
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "0 16px 16px 0",
          }}
        />
        <img
          src={techonologyBanner}
          alt="Imagem de tecnologia"
          style={{
            flex: 1,
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "16px 0 0 16px",
          }}
        />
      </div>
      <EquipamentLease />
      <EquipamentoBannerFooter />
      <ClientComments />
      <Footer />
    </>
  );
}
