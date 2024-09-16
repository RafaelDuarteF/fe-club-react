import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
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
    </>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
