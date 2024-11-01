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
            <div className="info-escudo">
              <div className='container-brasao'>
                <img src={fotoTime} alt="Brasão do seu time" className="brasao-time" />
                <div className="info-time">
                  <span>Monteiro's Club</span>
                  <h2>823 Coins</h2>
                </div>
              </div>
              <div className="container-carro">
                <img src={carro} alt="Seu Carro"/>
                <span className=''>Lv2</span>
                <button className="btn-editar">Editar</button>
              </div>

            </div>
            <div className="container-ranking">
              <h3>Ranking</h3>

              
            </div>
          </div>
          <div className="right">

          </div>
        </section>
       
      </main>
    
    </>
  );
}
