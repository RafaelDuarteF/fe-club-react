import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

// Importação das imagem
import feClubLogo from "../../assets/img/default/feclub-logo.jfif"
import home from "../../assets/img/home/home.mp4"


export default function LoginPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validateEntrys = (username, password) => {
        return username && password;
    };

    const login = () => {
        if (validateEntrys(username, password)) {
            if (username === 'user' && password === '123456') {
                alert('Logado com sucesso');
                setUsername('');
                setPassword('');
                navigate("/")
            } else {
                alert('Senha invalida');
            }
        } else {
            alert('Alguns dos campos estão faltando!');
        }
    };

    return (
        <main className="mainContainer">
            <div className="loginContainer">
                <form className="formsLogin">
                    <img src={feClubLogo} alt="logo" className="felogo" />

                    <label className="defaultFormText">Usuário:</label>
                    <input
                        type="text"
                        className="formDefaultStyle"
                        placeholder="Digite o seu username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label className="defaultFormText">Senha:</label>
                    <input
                        type="password"
                        className="formDefaultStyle"
                        placeholder="Digite a sua senha:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className="registerText">Cadastre-se</p>

                    <button className="loginButton" onClick={login}>
                        <p>ENTRAR</p>
                    </button>
                </form>
            </div>

            <div className="lineMiddle"></div>

            <div className="videoBackground">
                <p>FE-CLUB</p>
                <video autoPlay muted loop>
                    <source src={home} type="video/mp4" />
                    O seu navegador não suporta a reprodução de vídeo em HTML5.
                </video>
            </div>
        </main>
    );
};
