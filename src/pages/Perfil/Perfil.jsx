// src/pages/Perfil.js
import React from 'react';
import './Perfil.css'; // Certifique-se de que os estilos estão corretamente ajustados
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Importando imagens
import fotoTime from '../../assets/img/Perfil/foto-time.png';
import carro from '../../assets/img/Perfil/imgSeuCarro.png';
import piloto1 from '../../assets/img/Perfil/piloto1.png';
import piloto2 from '../../assets/img/Perfil/piloto2.png';

export default function Perfil() {
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
            <span className="aviso-mercado" id="demo"></span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
