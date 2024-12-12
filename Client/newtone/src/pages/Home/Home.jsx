import {useEffect} from 'react'

import "./Home.css"

function Home() {

    useEffect(() => {
        document.title = "Início | Newtone";
    }, [])

    return (
        <>
            <a className="top" href="#">
                <ion-icon name="arrow-up-outline"></ion-icon>
            </a>
            <img className="image" src="../src/assets/background.webp" />
            <div className="main-container">
                <section className="home">
                    <div className="home-container">
                        <h1>NEWTONE</h1>
                        <img src="../src/assets/icon.png" />
                        <p>
                            Descubra uma nova forma de explorar o universo com
                            as fascinantes curiosidades astronômicas que o site
                            oferece, proporcionando uma perspectiva única para
                            enxergar o cosmos sob um novo tom.
                        </p>
                        <a href="#about"><button className="btn btn-pr">Começar!</button></a>
                    </div>
                </section>
                <section id="about" className="about">
                    <div className="about-container">
                        <h1>Sobre</h1>
                        <div className="info">
                            <p>
                                Aqui disponibilizamos dados astronômicos fornecidos por serviços da
                                NASA e de outras empresas especializadas no setor espacial. Atualmente,
                                oferecemos três serviços principais:
                            </p>

                            <a href="/apod" className="box-info">
                                <strong>APOD (Astronomy Picture of the Day): </strong>
                                Uma imagem diária diretamente da NASA, acompanhada por uma descrição
                                detalhada sobre o conteúdo e seu contexto astronômico.
                            </a>


                            <a href="/iss" className="box-info">
                                <strong>ISS (International Space Station): </strong>
                                Exibe a localização em tempo real da Estação Espacial Internacional,
                                permitindo acompanhar seu trajeto ao redor da Terra.
                            </a>

                            <a href="/epic" className="box-info">
                                <strong>EPIC (Earth Polychromatic Imaging Camera): </strong>
                                Uma coleção de imagens policromáticas da Terra capturadas pela NASA, com
                                opção de selecionar a data. São oferecidas versões com cores naturais e
                                aprimoradas, destacando detalhes impressionantes do nosso planeta.
                            </a>
                        </div>
                        <div className="about-logo">
                            <h1>NEWTONE</h1>
                            <p>(Para voltar para a página anterior aperte na logo NEWTONE)</p>
                        </div>
                    </div>
                </section>
            </div>


            <footer id="footer">
                <div className="footer-container">
                    <h1>NEWTONE</h1>
                    <p>Copyright © 2024. Desenvolvido por Newtone</p>
                    <img src="../src/assets/icon.png" />
                </div>
            </footer>
            <script src="home/home.js"></script>
        </>
    )
}

export default Home;