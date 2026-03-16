import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import HeaderBanner from "../../components/HeaderBanner";
import FormContainer from "../../components/FormContainer";
import Typography from "../../components/Typography";

import bgImage from "../../assets/banner-solucoes.jpg";
import softwareSuporte from "../../assets/software-suporte.png";
import garantiaSuporte from "../../assets/background-suporte.png";
import relatoTraumec from "../../assets/background-depoimento.png";
import experiencia13Anos from "../../assets/background-experience.png";

import CardTextImage from "../../components/CardTextImage";

import {
  Page,
  Intro,
  CardsSection,
  SoftwareSection,
  SoftwareImage,
  LinkText,
} from "./styles";

export function Suporte() {
  return (
    <Page>
      <BlackHeader />

      <HeaderBanner text="Suporte" backgroundImage={bgImage} fontWeight="500" />

      <Intro>
        <Typography
          variant="Quicksand"
          fontSize="clamp(28px,5vw,48px)"
          fontWeight="500"
        >
          Conte com nosso suporte
        </Typography>

        <Typography variant="Montserrat" colorText="#1E1E20">
          Entendemos que problemas acontecem, e vários deles podem ser
          resolvidos com alguns pequenos passos. Nosso objetivo é garantir
          tranquilidade para sua empresa.
        </Typography>

        <Typography variant="Montserrat" colorText="#1E1E20">
          Em situações de urgência, nosso suporte ágil entregará à sua empresa
          uma solução ideal em até 8 horas úteis.
        </Typography>

        <LinkText>
          <Typography variant="Montserrat" colorText="#014C80">
            Abra um Chamado
          </Typography>
        </LinkText>
      </Intro>

      <CardsSection>
        <CardTextImage
          image={experiencia13Anos}
          text={
            <>
              13 <br /> Anos de <br /> Experiência
            </>
          }
        />

        <CardTextImage
          variant="other"
          image={relatoTraumec}
          text={
            "A Onloc é um grande parceiro da Traumec, com um ótimo atendimento, agilidade, qualidade e sobretudo proximidade com o cliente. Certamente é um parceiro que se preocupa com as nossas necessidades e que estará nos acompanhando em nossa jornada de TI"
          }
        />

        <CardTextImage
          image={garantiaSuporte}
          text={
            <>
              Garantia de <br /> Suporte
              <br /> em até 8h úteis.
            </>
          }
        />
      </CardsSection>

      <SoftwareSection>
        <SoftwareImage src={softwareSuporte} alt="Software de Suporte" />
      </SoftwareSection>

      <FormContainer />
      <Footer />
    </Page>
  );
}
