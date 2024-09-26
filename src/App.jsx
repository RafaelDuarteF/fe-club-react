import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';

import CadastroPage from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import LoginPage from './pages/Login/Login';
import Corridas from './pages/Corridas/Corridas';
import LayoutPadrao from './components/LayoutPadrao/LayoutPadrao';// Importando o layout padrão

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rotas que usam o layout com Header e Footer */}
      <Route element={<LayoutPadrao />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/corridas" element={<Corridas />} />
      </Route>

      {/* Rotas sem Header e Footer */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
