import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import BlackHeader from "../components/BlackHeader";
import EquipamentoViewer from "../components/EquipamentoViewer";
import EquipamentoDetalhesInfo from "../components/EquipamentoDetalhesInfo";
import FAQ from "../components/FAQ";
import RecomendItems from "../components/RecomendItems";
import ClientComments from "../components/ClientComments";

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
      <div style={{ background: "#fff", padding: "100px 200px " }}>
        <EquipamentoDetalhesInfo />
        <FAQ />
      </div>
      <div style={{ background: "#EFF2F3", padding: "100px 100px " }}>
        <RecomendItems />
        <hr
          style={{ margin: "50px", marginTop: "175px", marginBottom: "120px" }}
        />
        <ClientComments />
      </div>
      <Footer />
    </>
  );
}
