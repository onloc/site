import { useState } from "react";
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
  { id: "Minidesks", img: minidesks },
  { id: "Notebooks", img: notebooks },
  { id: "Servidores", img: servidores },
  { id: "Workstation", img: workstation },
];

const EquipamentoFilter = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <Container>
      <Typography>Selecione a categoria</Typography>
      <ListContainer>
        {categorias.map((cat) => (
          <ItemWrapper key={cat.id} onClick={() => handleSelect(cat.id)}>
            <FilterItem isSelected={selected === cat.id}>
              <FilterImage src={cat.img} alt={cat.id} />
            </FilterItem>
            <FilterTitle isSelected={selected === cat.id}>{cat.id}</FilterTitle>
          </ItemWrapper>
        ))}
      </ListContainer>
    </Container>
  );
};

export default EquipamentoFilter;
