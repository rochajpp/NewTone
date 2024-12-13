import { useEffect, useState } from 'react'

import './EpicForm.css'

function EpicForm() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

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
                return;
            }
        }
    
        async function init() {
            const data = await getDataApi("/epic");
            setData(data);
            setLoading(false);
        }
    
        init();
    })

    if(loading){
        return(
            <>
                <p>Carregando...</p>
            </>
        )
    }
    
    return (
        <>
            <span class="help">
                <span class="help-icon" onclick="openSpan()"><ion-icon name="help-circle-outline"></ion-icon></span>

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

            <video src="/epic/assets/earth.mp4" autoplay loop muted></video>

            <div class="main-container">
                <div class="box">
                    <form action="/epic/search" method="POST">
                        <h1>EPIC</h1>
                        <div class="input-area">
                            <label>Tipo:</label>
                            <select name="type" required>
                                <option value="" selected disabled>Selecione o tipo da imagem</option>
                                <option value="enhanced">Aprimorada</option>
                                <option value="natural">Natural</option>
                            </select>
                        </div>

                        <div class="input-area">
                            <label>Data</label>
                            <select name="date" required>
                                <option value="" selected disabled>Datas disponíveis</option>
                                {data.map((data, key) => (
                                    <option value={data.date}>{data.date}</option>
                                ))}


                            </select>
                        </div>

                        <button class="btn btn-pr">Pesquisar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EpicForm