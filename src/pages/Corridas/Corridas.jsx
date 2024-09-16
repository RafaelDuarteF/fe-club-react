import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import RaceInfo from './corridas-objs.jsx';
import NewCarousel from './corridas-slider.jsx';
import './Corridas.css';

export default function Corridas() {
  const informacoes = RaceInfo();
  //Slider
  useEffect(() => {
    const newcarrousel = NewCarousel();
    newcarrousel.setControls();
    newcarrousel.useControls();
  }, []);

  return (
    <>
      <div className="div-body">
        <Header />
        <section className="section-corridas">
          <div className="container-corridas">
            <h1>Proxima Corrida</h1>
            <div className="gallery">
              <div className="gallery-container">
                {informacoes.map(
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
                      ></img>
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
      </div>
      sc
    </>
  );
}
