import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import EquipamentoViewer from "../components/EquipamentoViewer";
import EquipamentoDetalhesInfo from "../components/EquipamentoDetalhesInfo";
import FAQ from "../components/FAQ";

export function EquipamentoDetalhes() {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return (
      <>
        <BlackHeader />
        <div style={{ padding: "100px", textAlign: "center" }}>
          <h1>Produto não encontrado</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <BlackHeader />
      <div style={{ background: "#EFF2F3" }}>
        <EquipamentoViewer item={item} />
      </div>
      <div style={{ background: "#fff", padding: "100px 352px " }}>
        <EquipamentoDetalhesInfo />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
