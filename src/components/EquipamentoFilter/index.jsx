import {
  Container,
  ItemWrapper,
  FilterItem,
  FilterImage,
  FilterTitle,
  Typography,
  ListContainer,
} from "./styles";

import desktop from "../../assets/desktop.png";
import minidesks from "../../assets/minidesk.png";
import notebooks from "../../assets/notebook.png";
import servidores from "../../assets/servidor.png";
import workstation from "../../assets/workstation.png";

const categorias = [
  { id: "Desktop", img: desktop },
  { id: "Minidesk", img: minidesks },
  { id: "Notebook", img: notebooks },
  { id: "Servidor", img: servidores },
  { id: "Workstation", img: workstation },
];

const EquipamentoFilter = ({ selected, setSelected }) => {
  // Ajuste na lógica: apenas dispara a mudança se for um item diferente do atual
  // e removemos o "null" para o visualizador nunca ficar vazio ao clicar duas vezes
  const handleSelect = (id) => {
    if (selected !== id) {
      setSelected(id);
    }
  };

  return (
    <Container>
      <Typography>Selecione a categoria</Typography>
      <ListContainer>
        {categorias.map((cat) => (
          <ItemWrapper key={cat.id} onClick={() => handleSelect(cat.id)}>
            <FilterItem $isSelected={selected === cat.id}>
              <FilterImage src={cat.img} alt={cat.id} />
            </FilterItem>
            <FilterTitle $isSelected={selected === cat.id}>{cat.id}</FilterTitle>
          </ItemWrapper>
        ))}
      </ListContainer>
    </Container>
  );
};

export default EquipamentoFilter;