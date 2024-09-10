import React, { useState } from "react";
import menuIcon from "../../assets/img/default/menu.png";
import perfilIcon from "../../assets/img/default/perfil.png";
import Menu from "../Menu/Menu";

export default function Header() {

    const [menuOpened, setMenuOpened] = useState(false);

    const handleAbrirMenu = () => {
        setMenuOpened(menuOp => !menuOp);
    }

    return (
        <> 
            <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
            <header>
                <img className="imgMenu" src={menuIcon} onClick={handleAbrirMenu} />
                <img className="imgProfile" src={perfilIcon} />
            </header>
        </>
    );
}