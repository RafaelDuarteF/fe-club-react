// src/pages/Perfil.js
import React, { useState, useEffect } from 'react';
import './Perfil.css'; // Certifique-se de que os estilos estão corretamente ajustados
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Importando imagens
import fotoTime from '../../assets/img/Perfil/foto-time.png';
import carro from '../../assets/img/Perfil/imgSeuCarro.png';
import piloto1 from '../../assets/img/Perfil/piloto1.png';
import piloto2 from '../../assets/img/Perfil/piloto2.png';
import { useNavigate } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const [timeLeft, setTimeLeft] = useState('');
  const [selectedPilots, setSelectedPilots] = useState([]); // Novo estado para armazenar os pilotos selecionados
  const [points, setPoints] = useState(100);
  const countDownDate = new Date("September 24, 2024 00:00:00").getTime();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("O MERCADO ESTÁ FECHADO!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`);
      }
    }, 1000);

    const asyncPoints = async () => {
      const pointsStorage = await AsyncStorage.getItem('points');
      if (pointsStorage) {
        setPoints(JSON.parse(pointsStorage));
      } else {
        AsyncStorage.setItem('points', JSON.stringify(points));
      }
    }

    asyncPoints();
    
    return () => clearInterval(interval); 
  }, [countDownDate]);

  useEffect(() => {
    const pilots = localStorage.getItem('selectedPilots');
    if (pilots) {
      setSelectedPilots(JSON.parse(pilots)); // Armazena os pilotos selecionados do localStorage
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="seu-carro">
          <div className="left">
            <span className="title">SEU CARRO</span>
            <img src={carro} alt="Seu carro" />
            <h3>GERAÇÃO I</h3>
          </div>
          <div className="right">
            <ul>
              <li>Modelo: Gen1</li>
              <li>Velocidade Máxima: 310km/h</li>
              <li>Motor: v8</li>
            </ul>
            <button className="btn-editar">EDITAR</button>
          </div>
        </section>
        <section className="time-pilotos">
          <div className="left-time-pilotos">
            <span className="title-left">Seu Time</span>
            <span className="name-team">Los Corridas</span>
            <img src={fotoTime} alt="Brasão do seu time" className="brasao-time" />
            <button className="btn-editar-time">EDITAR</button>
            <span className="points-team">{points.toFixed(2)} coins</span>
          </div>
          <div className="right-time-pilotos">
            <div className="container-right">
              <span className="title-right">Seus Pilotos</span>
              <div className="container-pilotos">
                {/* Renderiza os pilotos selecionados */}
                {selectedPilots.length > 0 ? (
                  selectedPilots.map((pilot, index) => (
                    <div className="piloto" key={pilot.id}>
                      <span className="nome-piloto">{pilot.name}</span>
                      <img src={index === 0 ? piloto1 : piloto2} alt={`Seu piloto ${pilot.name}`} /> {/* Exemplo para usar as imagens */}
                    </div>
                  ))
                ) : (
                  <p>Nenhum piloto selecionado.</p>
                )}
              </div>
            </div>
            <button className="btn-editar-pilotos" onClick={() => navigate('/selecaoPilotos')}>{selectedPilots.length > 0 ? "EDITAR PILOTOS" : "SELECIONAR PILOTOS"}</button>

            {/* Renderiza o aviso somente se o mercado não estiver fechado */}
            { !timeLeft.includes('FECHADO') && (
              <>
                <span className="aviso-mercado" style={{ color: timeLeft.includes('FECHADO') ? 'red' : 'black' }}>
                  O mercado fecha em {timeLeft}
                </span>

                <span className="aviso-mercado-mobile" style={{ color: timeLeft.includes('FECHADO') ? 'red' : 'black' }}>
                  O mercado fecha em 
                </span>
                <span className="aviso-mercado-mobile" style={{ color: timeLeft.includes('FECHADO') ? 'red' : 'black' }}>
                  {timeLeft}
                </span>
              </>
            )}

            {/* Renderiza a mensagem "O MERCADO ESTÁ FECHADO!" se estiver fechado */}
            { timeLeft.includes('FECHADO') && (
              <span className="aviso-mercado-fechado" style={{ color: 'green' }}>
                {/* {timeLeft} */}
                O MERCADO ESTÁ ABERTO
              </span>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
