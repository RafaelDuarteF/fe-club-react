import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import RaceInfo from './corridas-objs.jsx';
import NewCarousel from './corridas-slider.jsx';
import './Corridas.css';
import Footer from '../../components/Footer/Footer.jsx';

export default function Corridas() {
  const informacoesRace = RaceInfo('raceInfo');
  const informacoesPilots = RaceInfo();

  useEffect(() => {
    const carousel = NewCarousel();
    if (carousel) {
      carousel.setControls();
      carousel.useControls();
    }
  }, []);

  return (
    <div className="div-body">
      <section className="section-corridas">
        <div className="container-corridas">
          <h1>Proximas Corridas</h1>
          <div className="gallery">
            <div className="gallery-container">
              {informacoesRace.map(
                ({ id, city, round, date, flag, hour, background }) => (
                  <div
                    key={id}
                    className={'race-img race-img-' + id}
                    style={{ background: `url(${background})` }}
                  >
                    <span className="race-city">{city}</span>
                    <span className="race-round">{round}</span>
                    <div className="race-date">
                      <span>{date.day}</span>
                      <span>{date.month}</span>
                    </div>
                    <img
                      className="race-flag"
                      src={flag.src}
                      alt={flag.alt}
                    />
                    <span className="race-hour">{hour}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="gallery-controls">
            <button className="gallery-controls-anterior"></button>
            <button className="gallery-controls-proximo"></button>
          </div>
        </div>
      </section>
      <section className="container-corridas section-ranking">
        <h1>Classificação dos Pilotos</h1>
        <ul className="lista-pilotos">
          {informacoesPilots.map(({ id, posicao, nome, equipe, pontos }) => (
            <li className="item-lista" key={id}>
              <div className="lista-infos">
                <span className="lista-posicao">{posicao}</span>
                <span className="lista-nome">{nome}</span>
                <span className="lista-equipe">{equipe}</span>
              </div>
              <div className="lista-pontos">{pontos}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
