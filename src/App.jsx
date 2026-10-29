import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profissionais from "./pages/Profissionais";
import PerfilProfissional from "./pages/PerfilProfissional";
import CadastroProfissional from "./pages/CadastroProfissional";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/LoginAdmin";
import Sobre from "./pages/Sobre";
import ComoFunciona from "./pages/ComoFunciona";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/profissionais/:id" element={<PerfilProfissional />} />
          <Route path="/cadastro" element={<CadastroProfissional />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;