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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/corridas" element={<Corridas />} />
      <Route path="/Cadastro" element={<CadastroPage />} />
    </>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
