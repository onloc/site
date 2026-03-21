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

function HomeCard({ image, title, text }) {
  return (
    <Card>
      <TopImage src={image} />

      <Content>
        <LogoTitleWrapper>
          <Logo src={dellLogo} alt="Dell" />
          <CardTitle>{title}</CardTitle>
        </LogoTitleWrapper>

        <Description>
            {text}
        </Description>
      </Content>

      <CardButton>Quero alugar</CardButton>
    </Card>
  );
}

export default HomeCard;
