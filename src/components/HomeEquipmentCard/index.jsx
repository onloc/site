import dellLogo from "../../assets/dell-logo.png";

import {
  CardTitle,
  Logo,
  Content,
  Card,
  Description,
  LogoTitleWrapper,
  CardButton,
  TopImage,
  ImageWrapper,
} from "./styles";

function HomeCard({ image, title, text, onScrollToForm }) {
  return (
    <Card>
      <ImageWrapper>
        <TopImage src={image} />
      </ImageWrapper>

      <Content>
        <LogoTitleWrapper>
          <CardTitle>{title}</CardTitle>
        </LogoTitleWrapper>

        <Description>{text}</Description>
      </Content>

      <CardButton
        onClick={() => window.open("https://wa.me/551930236697", "_blank")}
      >
        Quero Alugar
      </CardButton>
    </Card>
  );
}

export default HomeCard;
