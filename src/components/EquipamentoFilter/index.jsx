import {
  Container,
  ItemWrapper,
  FilterItem,
  FilterImage,
  FilterTitle,
  Typography,
  ListContainer,
} from "./styles";

import desktop from "../../assets/Equipamentos-Site-2026/Desktop/imgi_4_desktop-optiplex-7020-sff-plus-black-gallery-1.png";
import minidesks from "../../assets/Equipamentos-Site-2026/Minidesk/imgi_9_glqtvt97991qr6pvpld5xlndawix36601264.png";
import notebooks from "../../assets/Equipamentos-Site-2026/Note/imgi_7_Notebook-Hp-Elitebook-640-G11-Pot-ncia-Ia-Seguran-a-Corporativa-E-Mobilidade-Profissional-Tela-14-16-10-Desempenho-Intel-Para-Trabalho-H-brido_1776256735.png";
import servidores from "../../assets/Equipamentos-Site-2026/Servidores/imgi_3_server-poweredge-t560-silver-gallery-5.png";
import workstation from "../../assets/Equipamentos-Site-2026/Workdesk/Sem-Título-1_0003_imgi_76_71eGNRo6GiL._AC_SL1500_.png";

const categorias = [
  { id: "Desktop", img: desktop },
  { id: "Minidesk", img: minidesks },
  { id: "Notebook", img: notebooks },
  { id: "Servidor", img: servidores },
  { id: "Workstation", img: workstation },
];

const EquipamentoFilter = ({ selected, setSelected }) => {
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
            <FilterTitle $isSelected={selected === cat.id}>
              {cat.id}
            </FilterTitle>
          </ItemWrapper>
        ))}
      </ListContainer>
    </Container>
  );
};

export default EquipamentoFilter;
