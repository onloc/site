import { Container, Title } from "./styles";

import SocialBar from "../SocialBar";

const EquipamentoBanner = () => {
  return (
    <Container>
      <SocialBar
        styleCustom={{ padding: "10px", fontSize: "14px", gap: "20px" }}
      />
      <Title>Equipamentos</Title>
    </Container>
  );
};

export default EquipamentoBanner;
