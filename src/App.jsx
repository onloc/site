import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Equipamentos } from "./pages/Equipamentos";
import { EquipamentoDetalhes } from "./pages/EquipamentoDetalhes";
import { Duvidas } from "./pages/Duvidas";
import { Contato } from "./pages/Contato";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
import { Solucoes } from "./pages/Solucoes/Solucoes";
import { Suporte } from "./pages/Suporte";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
