import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/equipamentos">
        <button>Ir para Equipamentos</button>
      </Link>
      <Footer />
    </div>
  );
}
