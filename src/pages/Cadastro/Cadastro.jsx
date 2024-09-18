import React, { useState } from "react";
import "./Cadastro.css";
import { useNavigate } from "react-router-dom";

// Importação das imagens
import feClubLogo from "../../assets/img/default/feclub-logo.jfif";
import home from "../../assets/img/home/home.mp4";

const BackArrowIcon = () => {
  const navigate = useNavigate();

  return (
    <div className="backArrowIcon" onClick={() => navigate("/")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </div>
  );
};

export default function CadastroPage() {
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [knowPassword, setknowPassword] = useState("");
  const navigate = useNavigate();

  const cadastrar = () => {
    if (username && Email && password && knowPassword) {
      if (password !== knowPassword) {
        alert("As senhas informadas não correspondem, tente novamente");
        setUsername("");
        setPassword("");
        setknowPassword("");
        setEmail("");
      } else {
        alert("Cadastro realizado com sucesso!");
      }
    } else {
      alert("Alguns campos estão faltando!");
    }
  };

  return (
    <main className="mainContainer">
      <BackArrowIcon />

      <div className="loginContainer">
        <form className="formsLogin">
          <img src={feClubLogo} alt="logo" className="felogo" />

          <label className="defaultFormText">Crie o seu Username:</label>
          <input
            type="text"
            className="formDefaultStyle"
            placeholder="Digite o seu Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="defaultFormText">E-mail:</label>
          <input
            type="text"
            className="formDefaultStyle"
            placeholder="Digite o seu E-mail"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="defaultFormText">Crie sua senha:</label>
          <input
            type="password"
            className="formDefaultStyle"
            placeholder="Digite sua senha:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="defaultFormText">Confirme sua senha:</label>
          <input
            type="password"
            className="formDefaultStyle"
            placeholder="Digite sua senha:"
            value={knowPassword}
            onChange={(e) => setknowPassword(e.target.value)}
          />

          <button className="cadastroButton" onClick={cadastrar}>
            <p>CADASTRAR</p>
          </button>

          <p className="registerText" onClick={() => navigate("/Login")}>
            Login
          </p>
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
}
