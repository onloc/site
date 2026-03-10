import { Link } from "react-router-dom";
import BlackHeader from "../components/BlackHeader";
import Footer from "../components/Footer";

export function Home() {
  return (
    <>
      <BlackHeader />

      <main>
        <h1>Home</h1>

        <Link to="/equipamentos">
          <button>Ir para Equipamentos</button>
        </Link>
      </main>

      <Footer />
    </>
  );
}