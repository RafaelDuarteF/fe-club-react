import React from "react";
import Footer from "../components/Footer/Footer"; 
import Header from "../components/Header/Header";
import './home.css';

// Importação das imagens
import inglaterra from "../assets/img/home/inglaterra.jpeg";
import china from "../assets/img/home/china.jpeg";
import alemanha from "../assets/img/home/alemanha.png";
import polonia from "../assets/img/home/polonia.png";
import italia from "../assets/img/home/italia.png";
import japao from "../assets/img/home/japao.jpeg";
import eua from "../assets/img/home/eua.png";
import brasil from "../assets/img/home/brasil.png";
import arabia from "../assets/img/home/arabia.png";
import mexico from "../assets/img/home/mexico.jpeg";
import feTech from "../assets/img/home/fe-tech.png"; // Imagem que estava no src diretamente
import pilotoHome from "../assets/img/home/piloto_home.png";
import carroFe from "../assets/img/home/carro_fe.png";
import aoVivo from "../assets/img/home/ao_vivo.png"; // Imagem do botão "Ao Vivo"
import CardRace from "../components/Home/CardRace";
import homeVideo from "../assets/img/home/home.mp4";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="video-background-container">
                <div id="video-background">
                    <video autoPlay muted loop>
                        <source src={homeVideo} type="video/mp4" />
                        O seu navegador não suporta a reprodução de vídeo em HTML5.
                    </video>
                    <div className="titleHome">
                        <p>Jogue o melhor da Fórmula E</p>
                        <h1>FE-Club</h1>
                        <h2>The Game</h2>
                    </div>
                </div>
            </div>
            <section className="propFEClub">
                <div className="left-first-section">
                    <h2>Dispute o melhor da Fórmula E com a comunidade e seus amigos!</h2>
                    <p>Compita em tempo real durante uma temporada inteira!</p>
                    <button onClick={() => navigate('/')}>Faça parte agora!</button>
                </div>
                <img src={feTech} alt="FE Tech" />
            </section>
            <section className="saibaMaisFE">
                <img className="piloto_home" src={pilotoHome} alt="Piloto Fórmula E" />
                <div className="right-second-section">
                    <h2>Fórmula E</h2>
                    <p>Entenda sobre os diferenciais da Fórmula mais interativa de todos os tempos!</p>
                    <button onClick={() => navigate('/')}>Saiba mais!</button>
                </div>
            </section>
            <section className="corridasFE">
                <div className="left-third-section">
                    <h2>Corridas</h2>
                    <p>Tenha acesso a todas as informações em tempo real das corridas de Fórmula E!</p>
                    <button>Ao Vivo <img className="aoVivo" src={aoVivo} alt="Ao Vivo" /></button>
                </div>
                <img className="carro_fe" src={carroFe} alt="Carro Fórmula E" />
            </section>
            <div className="cardRaces">
                <h2>Corridas</h2>
                <div className="card">
                    <CardRace firstOrLast={'firstCard'} image={inglaterra} local={'London'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace image={china} local={'Shangai'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace image={alemanha} local={'Berlin'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace image={polonia} local={'Monaco'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace firstOrLast={'lastCard'} image={italia} local={'Misano'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                </div>
                <div className="card">
                    <CardRace firstOrLast={'firstCard'} image={japao} local={'Tokyo'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace image={eua} local={'Portland'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace image={brasil} local={'São Paulo'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace image={arabia} local={'Diriyah'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                    <CardRace firstOrLast={'lastCard'} image={mexico} local={'Mexico City'} data={'13 jan 2024'} horaQualificacao={'10:00'} horaCorrida={'12:00'} />
                </div>
            </div>
            <Footer />
        </>
    );
}