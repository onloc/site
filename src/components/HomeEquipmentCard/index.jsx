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

function HomeCard({ image, title, text, onScrollToForm }) {
  return (
    <Card>
      <TopImage src={image} />

      <Content>
        <LogoTitleWrapper>
          <CardTitle>{title}</CardTitle>
        </LogoTitleWrapper>

        <Description>
            {text}
        </Description>
      </Content>

      <CardButton onClick={onScrollToForm}>Quero alugar</CardButton>
    </Card>
  );
}

export default HomeCard;
