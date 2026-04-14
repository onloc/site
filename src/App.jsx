import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Equipamentos } from "./pages/Equipamentos";
import { EquipamentoDetalhes } from "./pages/EuipamentoDetalhes/EquipamentoDetalhes";
import { Duvidas } from "./pages/Duvidas/Duvidas";
import { Contato } from "./pages/Contato/Contato";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
import { Solucoes } from "./pages/Solucoes/Solucoes";
import { Suporte } from "./pages/Suporte/Suporte";
import { TermoDeUso } from "./pages/TermoDeUso/TermoDeUso";

import ScrollToTop from "./components/utils/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/equipamentos/:id" element={<EquipamentoDetalhes />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/termo-de-uso" element={<TermoDeUso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
