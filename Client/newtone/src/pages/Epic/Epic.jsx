import { useEffect, useState } from 'react'

import './Epic.css'

function Epic() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [type, setType] = useState(null);
    const [date, setDate] = useState(null);
    const [epic, setEpic] = useState(null);
    const [err, setErr] = useState(null);

    async function submit(e){
        e.preventDefault();

        const query = JSON.stringify({type: type, date: date});

        try{
            const response = await fetch("http://localhost:8080/epic/search", {
                method: "POST",
                headers: {'Content-Type': 'application/json' },
                body: query
            });

            const data = await response.json();
            setEpic(data);

        } catch(err) {
            setErr(err);
            return;
        }
    }

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

    if(epic != null){
        return(
            <>
                
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
                    <form onSubmit={submit}>
                        <h1>EPIC</h1>
                        <div className="input-area">
                            <label>Tipo:</label>
                            <select onChange={(e) => setType(e.target.value)} name="type" defaultValue="" required>
                                <option value="" disabled>Selecione o tipo da imagem</option>
                                <option value="enhanced">Aprimorada</option>
                                <option value="natural">Natural</option>
                            </select>
                        </div>

                        <div className="input-area">
                            <label>Data</label>
                            <select onChange={(e) => setDate(e.target.value)} name="date" defaultValue="" required>
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

export default Epic