import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import NewCarousel from './corridas-slider.jsx';
import './Corridas.css';
import Footer from '../../components/Footer/Footer.jsx';
import CardContainer from '../../components/Page-Corridas/CardContainer.jsx';
import CardCorridas from '../../components/Page-Corridas/CardCorridas.jsx';
import corridas from '../../data/corridas.json';
import pilotos from '../../data/pilotos.json';
import RankingContainer from '../../components/Page-Corridas/RankingContainer.jsx';
import RankingItem from '../../components/Page-Corridas/RankingItem.jsx';

export default function Corridas() {
  useEffect(() => {
    const carousel = NewCarousel();
    if (carousel) {
      carousel.setControls();
      carousel.useControls();
    }
  }, []);

  return (
    <div className="div-body">
      <Header />
      <section className="section-corridas">
        <CardContainer titulo="Proximas Corridas">
          {corridas.map((corrida) => (
            <CardCorridas key={corrida.id} {...corrida} />
          ))}
        </CardContainer>
      </section>
      <section className="container-corridas section-ranking">
        <RankingContainer titulo={'Classificação dos Pilotos'}>
          {pilotos.map((piloto) => (
            <RankingItem key={piloto.id} {...piloto} />
          ))}
        </RankingContainer>
      </section>
      <Footer />
    </div>
  );
}
