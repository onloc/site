import { useState, useEffect } from "react"; // Adicionado useEffect
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
  BenefitsContainer,
} from "./styles";

const EquipamentoViewer = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(item.image);
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });

  useEffect(() => {
    setSelectedImage(item.image);
  }, [item]);

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
          <Button>36 meses</Button>
        </ButtonGroup>

        <MainButton
          onClick={() => window.open("https://wa.me/551930236697", "_blank")}
        >
          Quero Alugar
        </MainButton>

        <BenefitsContainer>
          <ButtonGroupTitle>BENEFÍCIOS E VANTAGENS</ButtonGroupTitle>
          <br />
          <BenefitsList>
            {/* <BenefitItem>
              Proteção contra furto qualificado e roubo.
            </BenefitItem> */}
            <BenefitItem>
              Pague mês a mês sem comprometer o limite do cartão.
            </BenefitItem>
            <BenefitItem>
              Qualidade 100% garantida (produto novo ou semi-novo).
            </BenefitItem>
          </BenefitsList>
        </BenefitsContainer>
      </RightColumn>
    </Container>
  );
};

export default EquipamentoViewer;
