import React, { useState, useEffect } from "react";
import menuIcon from "../../assets/img/default/menu.png";
import perfilIcon from "../../assets/img/default/perfil.png";
import Menu from "../Menu/Menu";

export default function Header() {

    const [menuOpened, setMenuOpened] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleAbrirMenu = () => {
        setMenuOpened(menuOp => !menuOp);
    };

    // Função para detectar o scroll
    const handleScroll = () => {
        if (window.scrollY > 50) { // Adiciona a classe se o scroll passar de 50px
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        // Adicionar o event listener ao montar o componente
        window.addEventListener("scroll", handleScroll);
        
        // Remover o event listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // O array vazio garante que isso só será executado uma vez ao montar o componente

    return (
        <> 
            <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
            <header className={`${scrolled ? 'scrolled' : ''}`}>
                <img className="imgMenu" src={menuIcon} onClick={handleAbrirMenu} />
                <img className="imgProfile" src={perfilIcon} />
            </header>
        </>
    );
}
