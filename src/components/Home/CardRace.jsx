export default function CardRace({firstOrLast, image, local, data, horaQualificacao, horaCorrida}) {
    return (
        <p className={firstOrLast}>
            <img className="additional-country" src={image} />
            <span>{local}</span>
            <span className="additional-infos"> {data}</span>
            <span className="additional-infos"><b>Qualificação:</b> {horaQualificacao}</span>
            <span className="additional-infos"><b>Corrida:</b> {horaCorrida}</span>
        </p>
    );
}  