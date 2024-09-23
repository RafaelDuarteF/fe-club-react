export default function CardCorridas(corrida) {
  return (
    <div
      className={'race-img race-img-' + corrida.id}
      style={{ background: `url(${corrida.background})` }}
    >
      <span className="race-city">{corrida.city}</span>
      <span className="race-round">{corrida.round}</span>
      <div className="race-date">
        <span>{corrida.date.day}</span>
        <span>{corrida.date.month}</span>
      </div>
      <img
        className="race-flag"
        src={corrida.flag.src}
        alt={corrida.flag.alt}
      />
      <span className="race-hour">{corrida.hour}</span>
    </div>
  );
}
