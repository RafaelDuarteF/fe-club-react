import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import CadastroPage from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import Sobre from './pages/Sobre/Sobre';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Cadastro" element={<CadastroPage />} />

    </>

  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}