import React, { useState } from 'react';
import './EscolherPiloto.css';


function EscolherPiloto() {
    const [saldo, setSaldo] = useState(234);
    const [pilotosComprados, setPilotosComprados] = useState([]);

    const pilotos = [
        { id: 1, nome: "Nick Cassidy", preco: 230, equipe: "Tech Mahindra", imagem: "nick.jpg" },
        { id: 2, nome: "Edoardo", preco: 250, equipe: "Tech Mahindra", imagem: "edoardo.jpg" }
    ];

    const comprarPiloto = (piloto) => {
        if (saldo >= piloto.preco) {
            setSaldo(saldo - piloto.preco);
            setPilotosComprados([...pilotosComprados, piloto]);
        } else {
            alert("Saldo insuficiente!");
        }
    };

    const venderPiloto = (piloto) => {
        setSaldo(saldo + piloto.preco);
        setPilotosComprados(pilotosComprados.filter(p => p.id !== piloto.id));
    };

    return (
        <div className="container">
            <div className="comprar-pilotos">
                <h2>Escolher Pilotos</h2>
                <div className="pilotos-list">
                    {pilotos.map(piloto => (
                        <div key={piloto.id} className="piloto-card">
                            <img src={piloto.imagem} alt={piloto.nome} className="piloto-imagem"/>
                            <p className="piloto-nome">{piloto.nome}</p>
                            <p className="piloto-preco">${piloto.preco}</p>
                            <button onClick={() => comprarPiloto(piloto)} className="botao-comprar">COMPRAR</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="saldo-comprados">
                <h3>Saldo: {saldo} Coins</h3>
                <div className="pilotos-comprados-list">
                    {pilotosComprados.map(piloto => (
                        <div key={piloto.id} className="piloto-comprado-card">
                            <img src={piloto.imagem} alt={piloto.nome} className="piloto-imagem"/>
                            <div className="piloto-info">
                                <p className="piloto-nome">{piloto.nome}</p>
                                <p>{piloto.equipe}</p>
                                <p className="piloto-preco">{piloto.preco} Coins</p>
                                <button onClick={() => venderPiloto(piloto)} className="botao-vender">VENDER</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="concluir">Concluído</button>
            </div>
        </div>
    );
}

export default EscolherPiloto;
