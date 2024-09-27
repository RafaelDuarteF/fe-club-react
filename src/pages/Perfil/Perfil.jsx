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

export default function Perfil() {
  const [timeLeft, setTimeLeft] = useState('');
  const countDownDate = new Date("September 24, 2024 00:00:00").getTime();

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

    return () => clearInterval(interval); 
  }, [countDownDate]);

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
            <span className="points-team">1432 pontos</span>
          </div>
          <div className="right-time-pilotos">
            <div className="container-right">
              <span className="title-right">Seus Pilotos</span>
              <div className="container-pilotos">
                <div className="piloto">
                  <span className="nome-piloto">Nick Cassidy</span>
                  <img src={piloto1} alt="Seu piloto 1" />
                </div>
                <div className="piloto">
                  <span className="nome-piloto">Edoardo Mortara</span>
                  <img src={piloto2} alt="Seu piloto 2" />
                </div>
              </div>
            </div>
            <button className="btn-editar-pilotos">EDITAR PILOTOS</button>

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
              <span className="aviso-mercado-fechado" style={{ color: 'red' }}>
                {timeLeft}
              </span>
            )}
          </div>
        </section>
      </main>
    
    </>
  );
}
