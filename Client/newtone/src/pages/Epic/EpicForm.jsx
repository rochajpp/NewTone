import { useEffect, useState } from 'react'

import './EpicForm.css'

function EpicForm() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [err, setErr] = useState(null);

    useEffect(() => {
        async function getDataApi(endpoint) {
            const base = "http://localhost:8080";
            const url = base + endpoint;
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (err) {
                console.log(err);
                setErr(err);
                return;
            }
        }

        async function init() {
            const data = await getDataApi("/epic");
            setData(data);
            setLoading(false);

            const help = document.querySelector(".help");

            help.onmouseover = () => {
                const span = document.querySelector(".help");
                span.style.right = "0";
            }

            help.onmouseout = () => {
                const span = document.querySelector(".help");
                span.style.right = "-40rem";
            }


        }

        init();
    }, [])

    if (loading) {
        return (
            <>
                <p>Carregando...</p>
            </>
        )
    }

    if (err != null) {
        return (
            <>
                <h1>Erro no requerimento de dados</h1>
                <h2>É possível que os servidores estejam com problemas temporários</h2>
                <h3>Tente nomanete mais tarde</h3>
                <p>{err}</p>
            </>
        )
    }

    return (
        <>
            <span className="help">
                <span className="help-icon"><ion-icon name="help-circle-outline"></ion-icon></span>

                <h2>EPIC</h2>
                <p>
                    EPIC é um serviço da NASA que disponibiliza imagens policromáticas da
                    Terra capturadas ao longo de um dia específico. Essas fotos permitem
                    observar a rotação do planeta, além de fornecer informações sobre sua
                    posição em relação à Lua e ao Sol.
                    <br />
                    <br />
                    Você pode escolher entre dois modos de visualização:
                    <br />
                    <br />
                    <strong> Natural:</strong> para imagens sem alterações, apresentando a Terra em suas cores reais.
                    <br />
                    <br />
                    <strong> Enfeitada:</strong> para imagens aprimoradas, com efeitos que destacam detalhes e aprimoram a visualização.
                </p>
            </span>

            <video src="../src/assets/earth.mp4" autoPlay loop muted></video>

            <div className="main-container">
                <div className="box">
                    <form action="http://localhost:8080/epic/search" method="POST">
                        <h1>EPIC</h1>
                        <div className="input-area">
                            <label>Tipo:</label>
                            <select name="type" defaultValue="" required>
                                <option value="" disabled>Selecione o tipo da imagem</option>
                                <option value="enhanced">Aprimorada</option>
                                <option value="natural">Natural</option>
                            </select>
                        </div>

                        <div className="input-area">
                            <label>Data</label>
                            <select name="date" defaultValue="" required>
                                <option value="" disabled>Datas disponíveis</option>
                                {data.length > 0
                                    ? data.map((data, key) => (
                                        <option key={key} value={data.date}>{data.date}</option>
                                    ))
                                    : <option disabled value="">Nenhuma data disponível</option>}
                            </select>
                        </div>

                        <button className="btn btn-pr">Pesquisar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EpicForm