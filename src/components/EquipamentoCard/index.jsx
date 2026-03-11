// import { useState } from "react";
import { Container, Image, Title, Description, Button } from "./styles";

const EquipamentoCard = ({ item }) => {
  //   const [isHovered, setIsHovered] = useState(false);
  return (
    <Container>
      <Title>{item.name}</Title>
      <Image src={item.image} alt={item.name} />
      <Description>{item.description}</Description>
      <Button>Quero Alugar</Button>
    </Container>
  );
};

export default EquipamentoCard;
