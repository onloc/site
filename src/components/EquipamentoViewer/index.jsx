import { useState } from "react";
import {
  Container,
  LeftColumn,
  RightColumn,
  ImageContainer,
  ZoomLens,
  Image,
  ImageCarrousel,
  Thumb,
  Title,
  Description,
  ButtonGroup,
  Button,
  MainButton,
  ButtonGroupTitle,
  BenefitsList,
  BenefitItem,
} from "./styles";

const EquipamentoViewer = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(item.image);
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
      display: "block",
    });
  };

  return (
    <Container>
      <LeftColumn>
        <ImageContainer
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setZoomStyle({ display: "none" })}
        >
          <Image src={selectedImage} alt={item.name} />
          <ZoomLens style={zoomStyle} />
        </ImageContainer>

        <ImageCarrousel>
          {item.gallery.map((img, index) => (
            <Thumb
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              onClick={() => setSelectedImage(img)}
              $active={selectedImage === img}
            />
          ))}
        </ImageCarrousel>
      </LeftColumn>

      <RightColumn>
        <Title>{item.name}</Title>
        <Description>{item.description}</Description>
        <hr
          style={{ color: "#BAC8E5", marginTop: "40px", marginBottom: "40px" }}
        />

        <ButtonGroupTitle>ESCOLHA O TEMPO DE CONTRATO:</ButtonGroupTitle>
        <ButtonGroup>
          <Button>12 meses</Button>
          <Button>24 meses</Button>
        </ButtonGroup>

        <MainButton>Quero alugar</MainButton>

        <div
          style={{
            border: "solid 1px #BAC8E5",
            padding: "24px",
            borderRadius: "8px",
            marginTop: "25px",
            width: "592px",
          }}
        >
          <ButtonGroupTitle>BENEFÍCIOS E VANTAGENS</ButtonGroupTitle>
          <br />
          <BenefitsList>
            <BenefitItem>
              Proteção contra furto qualificado e roubo.
            </BenefitItem>
            <BenefitItem>
              Pague mês a mês sem comprometer o limite do cartão.
            </BenefitItem>
            <BenefitItem>
              Qualidade 100% garantida (produto novo ou semi-novo).
            </BenefitItem>
          </BenefitsList>
        </div>
      </RightColumn>
    </Container>
  );
};

export default EquipamentoViewer;
