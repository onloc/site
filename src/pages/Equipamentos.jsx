import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import EquipamentoBanner from "../components/EquipamentoBanner";
import EquipamentoFilter from "../components/EquipamentoFilter";

export function Equipamentos() {
  return (
    <div>
      <BlackHeader />
      <h1>Equipamentos</h1>
      {/* <EquipamentoBanner /> */}
      <EquipamentoFilter />
      <Link to="/">Voltar para a Home</Link>
      <Footer />
    </div>
  );
}
