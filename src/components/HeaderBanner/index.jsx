import { Container, Title } from "./styles";
import SocialBar from "../SocialBar";

const HeaderBanner = ({ text, backgroundImage }) => {
  return (
    <Container $bg={backgroundImage}>
      <SocialBar
        styleCustom={{ padding: "10px", fontSize: "14px", gap: "20px" }}
      />
      <Title>{text}</Title>
    </Container>
  );
};

export default HeaderBanner;