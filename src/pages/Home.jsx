import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />

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