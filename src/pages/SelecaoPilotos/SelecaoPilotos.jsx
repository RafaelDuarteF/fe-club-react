import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './selecaoPilotos.css';
import axios from "axios";
import Header from "../../components/Header/Header";

export default function SelecaoPilotos() {
    const [selectedPilots, setSelectedPilots] = useState([]);
    const [pilotos, setPilotos] = useState([]);
    const navigate = useNavigate();
    const saveButtonRef = useRef(null); // Referência ao botão de salvar

    useEffect(() => {
        async function fetchPilots() {
            try {
                const response = await axios.get('https://feclub.soaresconsultingdata.com/getPilotsByYear?year=2024');
                const pilots = response.data.pilots.map(pilot => ({
                    id: pilot.id,
                    name: pilot.name,
                    country: pilot.country,
                    price: pilot.price,
                    points: pilot.points,
                    position: pilot.position
                }));
                setPilotos(pilots);
            } catch (error) {
                console.error('Erro ao buscar dados dos pilotos:', error);
            }
        }
        fetchPilots();
    }, []);

    const handlePilotSelection = (pilot) => {
        if (selectedPilots.length < 2) {
            setSelectedPilots(prev => {
                const newSelection = [...prev.filter(p => p.id !== pilot.id), pilot];
                if (newSelection.length === 2) {
                    saveButtonRef.current.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até o botão de salvar
                }
                return newSelection;
            });
        } else {
            alert("Você só pode selecionar dois pilotos.");
        }
    };

    const handleDeselect = (pilotId) => {
        setSelectedPilots(selectedPilots.filter(p => p.id !== pilotId));
    };

    const handleSave = () => {
        if (selectedPilots.length > 0) {
            localStorage.setItem('selectedPilots', JSON.stringify(selectedPilots));
            const currentPoints = 100;
            localStorage.setItem('points', JSON.stringify(currentPoints - selectedPilots.reduce((total, pilot) => total + pilot.price, 0)));
            navigate("/perfil");
        } else {
            alert("Nenhum piloto selecionado para salvar.");
        }
    };

    // Calcular o valor total dos pilotos selecionados
    const totalValue = selectedPilots.reduce((total, pilot) => total + pilot.price, 0);

    return (
        <>
            <Header isShadowScroll={true} />
            <div className="pilots-container">
                <h2>Seleção de Pilotos</h2>
                <div className="pilots-info">
                    <p>Selecione até 2 pilotos para a sua equipe. Você pode salvá-los ao final.</p>
                </div>
                <ul className="pilots-list">
                    {pilotos.sort((a, b) => a.position - b.position).map(pilot => (
                        <li key={pilot.id} className={`pilot-item ${selectedPilots.includes(pilot) ? 'selected' : ''}`}>
                            <div className="pilot-info">
                                <h3>{pilot.name} <span>({pilot.country})</span></h3>
                                <p>Preço: {pilot.price} coins</p>
                                <p>Pontos: {pilot.points}</p>
                                <p>Posição: {pilot.position}</p>
                            </div>
                            {selectedPilots.includes(pilot) ? (
                                <button onClick={() => handleDeselect(pilot.id)} className="deselect-btn">Desmarcar</button>
                            ) : (
                                <button onClick={() => handlePilotSelection(pilot)} className="select-btn">Selecionar</button>
                            )}
                        </li>
                    ))}
                </ul>
                <button ref={saveButtonRef} onClick={handleSave} className="save-btn">Salvar Seleção</button>
                <div className="selected-pilots">
                    <h3>Pilotos Selecionados:</h3>
                    {selectedPilots.length === 0 ? (
                        <p>Nenhum piloto selecionado.</p>
                    ) : (
                        <ul>
                            {selectedPilots.map(pilot => (
                                <li key={pilot.id}>{pilot.name} ({pilot.country})</li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Exibir o valor total */}
                {selectedPilots.length === 2 && (
                    <div className="total-value">
                        <h3>Valor Total: R${totalValue.toFixed(2)}</h3>
                    </div>
                )}
            </div>
        </>
    );
}
