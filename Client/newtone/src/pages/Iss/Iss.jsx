import './Iss.css'
import './Iss.js'

function Iss() {
    return (
        <>
            <img className="image" src="../src/assets/iss.webp" />

            <div className="main-container">
                <section className="map">
                    <div className="map-container">
                        <h1>Localização da ISS</h1>
                        <br />
                        <br />
                        <div className="map-area">
                            <div id="map"></div>
                        </div>
                    </div>
                </section>
                <section className="info">
                    <div className="info-container">
                        <h1>Informações</h1>
                        <br />
                        <div className="info-desc">
                            <div className="lat">
                                <h2>Latitude: </h2>
                                <p></p>
                            </div>
                            <div className="long">
                                <h2>Longitude: </h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Iss;