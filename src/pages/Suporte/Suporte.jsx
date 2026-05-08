import Footer from "../../components/Footer";
import BlackHeader from "../../components/BlackHeader";
import HeaderBanner from "../../components/HeaderBanner";
import FormContainer from "../../components/FormContainer";
import Typography from "../../components/Typography";

import bgImage from "../../assets/banner-solucoes.jpg";
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
  SoftwareContainer,
  LinkText,
  SoftwareContent,
  SoftwarePatern,
  CallButton,
  ButtonContainer,
} from "./styles";
import { InfoSuportSection } from "../../components/InfoSuportSection";

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

        <ButtonContainer>
          <CallButton
            onClick={() => window.open("https://wa.me/5519984573320", "_blank")}
          >
            Abra um Chamado
          </CallButton>
        </ButtonContainer>
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
          backgroundColor={"#014c80"}
          text={
            "“O desenvolvimento tecnológico trouxe grandes oportunidades  e somente empresas de visão aproveitam e transformam oportunidades em ótimos negócios. A locação de computadores, pela ON LOC  trouxe facilidade e agilidade para outras empresas. Excelência em prestação de serviços. Parabéns !!!” "
          }
          tinyText={"Cliente de Planejados"}
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

      {/* <SoftwareSection>
        <SoftwareContainer>
          <SoftwareContent>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <mask
                id="mask0_2257_1043"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="72"
                height="72"
              >
                <rect width="72" height="72" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2257_1043)">
                <path
                  d="M30.4037 63L29.3192 54.3232C28.3617 54.0347 27.3262 53.5807 26.2127 52.9613C25.0992 52.3423 24.1522 51.679 23.3717 50.9715L15.3692 54.375L9.77344 44.625L16.6907 39.4095C16.6022 38.8675 16.5292 38.309 16.4717 37.734C16.4137 37.159 16.3847 36.6003 16.3847 36.0578C16.3847 35.5537 16.4137 35.024 16.4717 34.4685C16.5292 33.9125 16.6022 33.2865 16.6907 32.5905L9.77344 27.375L15.3692 17.7405L23.3139 21.0863C24.2099 20.3403 25.1792 19.6672 26.2217 19.0672C27.2637 18.4672 28.2769 18.0037 29.2614 17.6768L30.4037 9H41.5967L42.6812 17.7345C43.8312 18.1385 44.8474 18.602 45.7299 19.125C46.6124 19.648 47.5212 20.3018 48.4562 21.0863L56.6312 17.7405L62.2269 27.375L55.0787 32.7637C55.2442 33.3827 55.3367 33.951 55.3562 34.4685C55.3752 34.9855 55.3847 35.496 55.3847 36C55.3847 36.4655 55.3654 36.9568 55.3269 37.4738C55.2884 37.9913 55.1999 38.6173 55.0614 39.3518L62.0942 44.625L56.4984 54.375L48.4562 50.9137C47.5212 51.6982 46.5807 52.3713 45.6347 52.9328C44.6887 53.4943 43.7042 53.9385 42.6812 54.2655L41.5967 63H30.4037ZM33.0002 60H38.8674L39.9752 51.8768C41.4867 51.4768 42.8472 50.9277 44.0567 50.2298C45.2667 49.5317 46.4984 48.575 47.7519 47.3595L55.2347 50.55L58.2174 45.45L51.6519 40.5173C51.9019 39.6633 52.0674 38.8778 52.1484 38.1608C52.2289 37.4433 52.2692 36.723 52.2692 36C52.2692 35.2385 52.2289 34.5182 52.1484 33.8392C52.0674 33.1607 51.9019 32.4137 51.6519 31.5983L58.3329 26.55L55.3502 21.45L47.6942 24.6578C46.7867 23.6618 45.5934 22.728 44.1144 21.8565C42.6359 20.9855 41.2369 20.4078 39.9174 20.1233L39.0002 12H33.0174L32.0829 20.0655C30.5714 20.3885 29.1819 20.9087 27.9144 21.6262C26.6474 22.3432 25.3869 23.3288 24.1329 24.5828L16.6502 21.45L13.6674 26.55L20.1752 31.4078C19.9252 32.0808 19.7502 32.8115 19.6502 33.6C19.5502 34.3885 19.5002 35.2078 19.5002 36.0578C19.5002 36.8193 19.5502 37.575 19.6502 38.325C19.7502 39.075 19.9059 39.8058 20.1174 40.5173L13.6674 45.45L16.6502 50.55L24.0752 47.4C25.2522 48.5885 26.4742 49.5415 27.7412 50.259C29.0087 50.976 30.4367 51.5345 32.0252 51.9345L33.0002 60ZM35.9192 43.5C38.0117 43.5 39.7849 42.773 41.2389 41.319C42.6924 39.8655 43.4192 38.0925 43.4192 36C43.4192 33.9075 42.6924 32.1345 41.2389 30.681C39.7849 29.227 38.0117 28.5 35.9192 28.5C33.8157 28.5 32.0397 29.227 30.5912 30.681C29.1432 32.1345 28.4192 33.9075 28.4192 36C28.4192 38.0925 29.1432 39.8655 30.5912 41.319C32.0397 42.773 33.8157 43.5 35.9192 43.5Z"
                  fill="white"
                />
              </g>
            </svg>
            <Typography
              variant="Montserrat"
              fontSize="48px"
              colorText="#fff"
              fontWeight="500"
            >
              Software e Suporte
            </Typography>
            <Typography
              variant="Montserrat"
              fontSize="16px"
              colorText="#fff"
              fontWeight="400"
            >
              Nosso suporte e manutenção de Software(s) são apenas para
              restauração do sistema operacional e programas instalados
              descritos no ato do pedido. Não somos responsáveis sobre outras
              configurações, atualizações, questões sobre Backups de arquivos e
              Vírus.
            </Typography>
          </SoftwareContent>
        </SoftwareContainer>
      </SoftwareSection> */}

      <InfoSuportSection />

      <FormContainer />
      <Footer />
    </Page>
  );
}
