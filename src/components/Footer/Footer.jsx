import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-infos">
                    <div className="pages-redirects">
                        <ul>
                            <li><a onClick={() => navigate('/')}>Home</a></li>
                            <li><a  onClick={() => navigate('/corridas')}>Corridas</a></li>
                            <li><a onClick={() => navigate('/login')}>Login</a></li>
                            <li><a onClick={() => navigate('/sobre')}>FE-Club</a></li>
                        </ul>
                    </div>
                    <p>Av. Senador Teotônio Vilela, 261, Interlagos – São Paulo – SP, CEP 04801-010. | CNPJ 19.995.390/0001-05</p>
                </div>
                <p className="copy">© 2024 FE-Club. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}