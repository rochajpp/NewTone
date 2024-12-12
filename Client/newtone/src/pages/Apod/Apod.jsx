import { useEffect, useState} from 'react'

import './Apod.css'

function Apod(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {

        async function getDataApi(endpoint){
            try{
                const response = await fetch("http://localhos:8080" + endpoint);
                const data = await response.json();
                return data;
            } catch(err){
                console.log(err);
                return;
            }
        }

        async function init(){
            const data = getDataApi("/apod");
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
                
            </div>
        </>
    )
}

export default Apod
