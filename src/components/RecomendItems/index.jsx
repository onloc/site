import { useNavigate } from "react-router-dom";
import { Title } from "./styles";

import EquipamentoCard from "../EquipamentoCard";
import ButtonComponent from "../ButtonComponent";

import desktop from "../../assets/mock-produto.png";
import servidor from "../../assets/servidor.png";
import notebook from "../../assets/notebook.png";
import workstation from "../../assets/workstation.png";

const mockItems = [
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Desktop",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [servidor, notebook, workstation, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Servidores",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Desktop",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
  {
    name: "Computador A620 i3",
    image: desktop,
    category: "Notebooks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo donec netus libero facilisi.",
    gallery: [desktop, desktop, desktop, desktop],
  },
];


function RecomendItems() {
    const navigate = useNavigate();
    
  return (
    <>
      <Title>Você também pode gostar:</Title>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {mockItems.map((item, index) => (
          <EquipamentoCard key={index} item={item} />
        ))}
        <ButtonComponent text={"Ver todos os produtos"} variant="black" func={() => navigate('/equipamentos')}/>
      </div>
    </>
  );
}

export default RecomendItems;
