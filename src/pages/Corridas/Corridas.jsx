import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import NewCarousel from './corridas-slider.jsx';
import './Corridas.css';
import Footer from '../../components/Footer/Footer.jsx';
import CardContainer from '../../components/Page-Corridas/CardContainer.jsx';
import CardCorridas from '../../components/Page-Corridas/CardCorridas.jsx';
import RankingContainer from '../../components/Page-Corridas/RankingContainer.jsx';
import RankingItem from '../../components/Page-Corridas/RankingItem.jsx';
import axios from 'axios';
import corridas from '../../data/corridas.json';

export default function Corridas() {
  const [pilotos, setPilotos] = useState([]);
  const [ano, setAno] = useState(2024); // ano inicial
  const anosDisponiveis = ['2020_21', 2022, 2023, 2024]; // anos disponíveis
  useEffect(() => {
    const fetchPilotos = async () => {
      try {
        const response = await axios.get(`https://feclub.soaresconsultingdata.com/getStandingsByYear?year=${ano}`);
        console.log(response.data);
        const infos = response.data.standings;
        
        // Mapeia os dados para pegar apenas as propriedades desejadas
        const dadosPilotos = infos.map(piloto => ({
          id: piloto.team.id,
          posicao: piloto.position ?? '',
          nome: piloto.team?.name ?? '',
          equipe: piloto.team.parentTeam?.name ?? '',
          pontos: piloto.points ?? ''
        }));

        setPilotos(dadosPilotos); // Define o estado com os dados filtrados
      } catch (error) {
        console.error('Erro ao buscar dados dos pilotos:', error);
      }
    };

    fetchPilotos();
  }, [ano]); // Refaça a requisição quando o ano mudar

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
        <CardContainer titulo="Proximas Corridas">
          {corridas.map((corrida) => (
            <CardCorridas key={corrida.id} {...corrida} />
          ))}
        </CardContainer>
      </section>
      <section className="container-corridas section-ranking">
        <RankingContainer titulo={'Classificação dos Pilotos'}>
          {/* Seletor de ano */}
          <select className='select-year' value={ano} onChange={(e) => setAno(e.target.value)}>
            {anosDisponiveis.map((anoDisponivel) => (
              <option key={anoDisponivel} value={anoDisponivel}>
                {anoDisponivel}
              </option>
            ))}
          </select>

          {pilotos.map((piloto) => (
            <RankingItem key={piloto.id} {...piloto} />
          ))}
        </RankingContainer>
      </section>
    </div>
  );
}
