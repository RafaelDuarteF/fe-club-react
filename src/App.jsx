import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import Sobre from './pages/Sobre/Sobre';
import Perfil from './pages/Perfil/Perfil';
import Corridas from './pages/Corridas/Corridas';
import CadastroPage from './pages/Cadastro/Cadastro';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/corridas" element={<Corridas />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/perfil" element={<Perfil/>} />
    </>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
