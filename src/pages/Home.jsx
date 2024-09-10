import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './home.css';

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
import CardRace from "../components/Home/CardRace";


export default function Home() {
    
    return(
        <>
            <Header />
            <div className="video-background-container">
                <div id="video-background">
                    <video autoPlay muted loop>
                        <source src="assets/home/home.mp4" type="video/mp4" />
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
                    <button onClick="redirectPage('login', true)">Faça parte agora!</button>
                </div>
                <img src="assets/home/fe-tech.png" />
            </section>
            <section className="saibaMaisFE">
                <img className="piloto_home" src="assets/home/piloto_home.png" />
                <div className="right-second-section">
                    <h2>Fórmula E</h2>
                    <p>Entenda sobre os diferenciais da Fórmula mais interativa de todos os tempos!</p>
                    <button onClick="redirectPage('learnMore', true)">Saiba mais!</button>
                </div>
            </section>
            <section className="corridasFE">
                <div className="left-third-section">
                    <h2>Corridas</h2>
                    <p>Tenha acesso a todas as informações em tempo real das corridas de Fórmula E!</p>
                    <button>Ao Vivo <img className="aoVivo" src="assets/home/ao_vivo.png" /></button>
                </div>
                <img className="carro_fe" src="assets/home/carro_fe.png" />
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