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
} from "./styles";

function HomeCard({ image }) {
  return (
    <Card>
      <TopImage src={image} />

      <Content>
        <LogoTitleWrapper>
          <Logo src={dellLogo} alt="Dell" />
          <CardTitle>Computador A620 i3</CardTitle>
        </LogoTitleWrapper>

        <Description>
          Equipamentos ideais para a sua empresa. MiniDesks e Desktops das
          marcas mais conceituadas do mercado, adquiridos de grandes fabricantes
          como HP, DELL.
        </Description>
      </Content>

      <CardButton>Quero alugar</CardButton>
    </Card>
  );
}

export default HomeCard;
