export default function RankingItem({ id, posicao, nome, equipe, pontos }) {
  return (
    <li className="item-lista" key={id}>
      <div className="lista-infos">
        <span className="lista-posicao">{posicao}</span>
        <span className="lista-nome">{nome}</span>
        <span className="lista-equipe">{equipe}</span>
      </div>
      <div className="lista-pontos">{pontos}</div>
    </li>
  );
}
