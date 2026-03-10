import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Equipamentos } from './pages/Equipamentos'; // Importe a página

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipamentos" element={<Equipamentos />} /> {/* Defina a rota */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;