import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre/Sobre';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} /> 
    </>
    
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
