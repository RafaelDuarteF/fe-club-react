export default function RankingContainer({ titulo, children }) {
  return (
    <>
      <h1>{titulo}</h1>
      <ul className="lista-pilotos">{children}</ul>
    </>
  );
}
