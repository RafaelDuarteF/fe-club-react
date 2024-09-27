export default function CardContainer({ titulo, children }) {
  return (
    <div className="container-corridas">
      <h1>{titulo}</h1>
      <div className="gallery">
        <div className="gallery-container">{children}</div>
      </div>
      <div className="gallery-controls">
        <button className="gallery-controls-anterior"></button>
        <button className="gallery-controls-proximo"></button>
      </div>
    </div>
  );
}
