    import { useEffect, useState} from 'react'

    import './Apod.css'

    function Apod(){
        const [loading, setLoading] = useState(true);
        const [data, setData] = useState({});

        useEffect(() => {

            document.documentElement.lang = "en";

            async function getDataApi(endpoint){
                const base = "http://localhost:8080";
                const url = base + endpoint;

                try{
                    const response = await fetch(url);
                    const data = await response.json();
                    return data;
                } catch(err){
                    console.log(err);
                    return;
                }
            }

            async function init(){
                const data = await getDataApi("/apod");
                setData(data);
                setLoading(false);
            }

            init();

        }, [])

        if(loading){
            return (
                <>
                    <p className="load">Carregando...</p>
                </>
            )
        }

        return(
            <>
                <img className="image" src="../src/assets/background-apod.webp" />
                <div className="main-container">
                    <a href={data.url} className="image-data" target="_blank">
                        {data.media_type == "image" ? <img src={data.url} /> : <iframe src={data.url}></iframe>}
                    </a>
                    <div className="info">
                        <h1>{data.title}</h1>
                        <br />
                        <h2>{data.date}</h2>
                        <br />
                        <p>{data.explanation}</p>
                        <br />
                        {data.copyright != undefined ? <h2>₢Copyright {data.copyright}</h2> : ""}
                    </div>
                </div>
            </>
        )
    }

    export default Apod
