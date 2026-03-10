import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export function Equipamentos() {
  return (
    <div>
      <h1>Equipamentos</h1>
      <Link to="/">Voltar para a Home</Link>
      <Footer />
    </div>
  );
}
