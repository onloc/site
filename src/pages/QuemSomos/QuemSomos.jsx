import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import HeaderBanner from "../../components/HeaderBanner";

import bgImage from "../../assets/who-we-are-banner.png";
import rentalImage from "../../assets/rental-image.png";
import whyOnloc from "../../assets/why-onloc.png";
import videoFlavor from "../../assets/video-flavor.png";

import Typography from "../../components/Typography";
import ButtonComponent from "../../components/ButtonComponent";
import OurNumbers from "../../components/OurNumbers";
import WhyLease from "../../components/WhyLease";
import ClientComments from "../../components/ClientComments";
import EquipamentoBannerFooter from "../../components/EquipamentoBannerFooter";
import TimeLine from "../../components/TimeLine";

import {
  Page,
  Section,
  Column,
  ImageContainer,
  Image,
  HighlightBox,
  VideoWrapper,
  VideoContainer,
  VideoImage,
  Button,
} from "./styles";

export function QuemSomos() {
  const navigate = useNavigate();

  return (
    <Page>
      <BlackHeader />
      <HeaderBanner text="Quem Somos" backgroundImage={bgImage} />

      <Section>
        <Column>
          <Typography
            variant="Quicksand"
            fontSize="40px"
            fontWeight="500"
            fontStyle="Medium"
            colorText="#1E1E20"
          >
            Locação de Equipamentos
          </Typography>

          <Typography variant="Montserrat" fontSize="16px" colorText="#0E1017">
            Presente no mercado há 10 anos, a ON.LOC através da qualidade
            promove o crescimento e maiores resultados, aumentando a
            produtividade dos nossos clientes através da entrega de qualidade e
            soluções corporativas em tecnologias inovadoras e fáceis de usar.
          </Typography>

          <HighlightBox>
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
          </HighlightBox>

          <Button>Quero Alugar</Button>
        </Column>

        <ImageContainer $display={true}>
          <Image src={rentalImage} alt="Imagem de aluguel de equipamentos" />
        </ImageContainer>
      </Section>

      <OurNumbers />

      <VideoWrapper>
        <VideoContainer>
          <VideoImage src={videoFlavor} alt="Imagem sabor vídeo" />
        </VideoContainer>
      </VideoWrapper>

      <Section>
        <ImageContainer>
          <Image src={whyOnloc} alt="Imagem de aluguel de equipamentos" />
        </ImageContainer>

        <Column>
          <Typography
            variant="Quicksand"
            fontSize="40px"
            fontWeight="500"
            fontStyle="Medium"
            colorText="#1E1E20"
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

          <Button>Quero Alugar</Button>
        </Column>
      </Section>

      <WhyLease />
      <TimeLine />
      <EquipamentoBannerFooter />
      <ClientComments />
      <Footer />
    </Page>
  );
}
