import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Sobre.css';


// Importação das imagem
import imagemSobre from "../../assets/img/Sobre/imagemSobre.png";


export default function Sobre() {
    return (

        <>
            <Header />
            <div className="pageLearnBody">
                <section className="propLearn">
                    <div className="left-section">
                        <h1>Entenda sobre o FE-Club, o jogo da Fórmula mais revolucionária!</h1>
                        <p>Aprecie o propósito de nosso jogo na Fórmula mais interativa e divertida!</p>
                    </div>
                    <div className="right-section-sobre">
                        <img src={imagemSobre} alt="Imagem FE-Club" />
                    </div>
                    
                </section>

                <section className="container-fe-club">
                    <h1><b>Por quê o FE-Club?</b></h1>
                    <h2 className="subtitle">Entenda os problemas que incentivaram o conceito da FE-Club.</h2>
                    <p>
                        A Fórmula E se destaca como uma modalidade inovadora e sustentável no mundo do
                        automobilismo, oferecendo uma alternativa emocionante às corridas tradicionais. No entanto,
                        percebemos que a Fórmula E ainda não alcançou o nível de reconhecimento e engajamento que
                        merece, além de ter uma má divulgação e difícil acesso a informação sobre a modalidade
                        (corridas, resultados etc). Foi então que decidimos agir para mudar essa realidade.
                    </p>
                    <p>
                        Nossa equipe identificou as principais barreiras que impedem o público de se conectar com a
                        Fórmula E e, com isso em mente, desenvolvemos uma solução: o FE-Club.
                    </p>
                    <p>
                        O FE-Club é um jogo envolvente e dinâmico, projetado especificamente para atrair e engajar fãs
                        de todas as idades. Ao integrar elementos de gamificação com a empolgante experiência da
                        Fórmula E, o FE-Club oferece aos jogadores a oportunidade de mergulhar no universo das
                        corridas elétricas de uma forma totalmente nova e interativa.
                    </p>
                    <p>No FE-Club, os jogadores podem:</p>
                    <ul className="lista">
                        <li>
                            <b>Construir e Gerenciar sua Própria Equipe:</b> Possibilidade de escolha de um a dois pilotos,
                            os jogadores têm total controle sobre suas equipes, vivendo a emoção de cada decisão.
                        </li>
                        <li>
                            <b>Participar de Competições Globais:</b> Compita contra outros jogadores ao redor do mundo
                            em torneios emocionantes, subindo nos rankings e ganhando recompensas exclusivas.
                        </li>
                        <li>
                            <b>Explorar a Tecnologia Sustentável:</b> Aprenda mais sobre as inovações sustentáveis da
                            Fórmula E e como elas estão moldando o futuro do automobilismo.
                        </li>
                        <li>
                            <b>Interagir com uma Comunidade Vibrante:</b> Junte-se a outros fãs, compartilhe estratégias
                            e celebre as vitórias em uma comunidade dedicada e apaixonada.
                        </li>
                    </ul>
                    <p>
                        Com o FE-Club, transformamos a paixão pela Fórmula E em uma experiência digital cativante,
                        proporcionando aos fãs uma maneira única de se conectar com o esporte.
                        Junte-se ao FE-Club e seja parte da revolução elétrica! Venha viver a emoção da Fórmula E de
                        uma forma que você nunca imaginou.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}