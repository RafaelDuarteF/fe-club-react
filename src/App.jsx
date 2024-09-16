import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/Login/Login';
import Sobre from './pages/Sobre/Sobre';
import Perfil from './pages/Perfil/Perfil';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/perfil" element={<Perfil />} />
    </>

  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}