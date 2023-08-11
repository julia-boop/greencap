import React from 'react'

export default function Offer() {
    return (
        <div className="main-container-o">
            <div className="offer-container">
                <div className="offer-items">
                    <h5>PRODUCTOS</h5>
                    <h1>Nuestra oferta 360</h1>
                    <h6>Ofrecemos acceso a los productos financieros tanto en el mercado local como en el internacional, con el fin de diversificar su portafolio de inversiones. </h6>
                    <button> <a href="/product"> Ver productos </a></button>
                </div>
                <div className="offer-img-container">
                    <img src="/items/frame3.png" alt="some"></img>
                </div>
            </div>
            <div className="service-container"> 
                <div className="service-img-container">
                    <img src="/items/frame4.png" alt="img"></img>
                </div>
                <div className="service-items">
                    <h5>SERVICIOS</h5>
                    <h1>Consultoría y Desarrollo</h1>
                    <h6>Nuestro servicio es integral desde la asesoría de compra hasta la posterior evaluación y seguimiento del portafolio de los inversores.</h6>
                    <button> <a href="/product"> Ver servicios </a></button>
                </div>
            </div>
        </div>
    )
}
