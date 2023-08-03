import React from 'react'
import './Main.css'

export default function Portfolio() {
    return (
        <div className="main-container-p">
            <div className="white-container">
                <div className="figure-container">
                    <div className="figures"> 
                        <h1 id="plus">+</h1>
                        <h1 id="number">250</h1>
                    </div>
                    <div className="title-container">
                        <h2>Portfolios personalizados</h2>
                    </div>
                </div>
                <div className="text-container">
                    <div>
                        <h3>QUE HACEMOS</h3>
                        <h5>Hace más de 20 años, ofrecemos una amplia gama de <b>servicios y productos financieros,</b> adecuados a las <b>necesidades particulares de los inversores  en el mercado de capitales</b></h5>
                    </div>
                    <div>
                        <h3>NUESTROS CLIENTES</h3>
                        <h5>Trabajamos para identificar los instrumentos financieros que se adapten al perfil de inversión de nuestros clientes, ya si sean <b>individuos, corporaciones o instituciones</b></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
