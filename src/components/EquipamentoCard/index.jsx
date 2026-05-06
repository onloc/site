import { useNavigate } from "react-router-dom";
import { Container, Image, Title, Description, Button } from "./styles";

const EquipamentoCard = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const productSlug = item.name.toLowerCase().replace(/ /g, "-");
    navigate(`/equipamentos/${productSlug}`, { state: { item } });
  };

  return (
    <Container>
      <Title>{item.name}</Title>
      <Image src={item.image} alt={item.name} />
      <Description>{item.description}</Description>
      <Button
        onClick={() => window.open("https://wa.me/551930236697", "_blank")}
      >
        Quero Alugar
      </Button>
    </Container>
  );
};

export default EquipamentoCard;
