import React from 'react'
import './ServiceDetail.css'

export default function ServiceDetail() {
    return (
        <div className="service-detail-container">
            <div className="service-title-container">
                <h5>SERVICIOS</h5>
                <h1>Control y seguimiento con un especialista asegurado</h1>
                <p>Nuestros servicios están diseñados para brindarle la libertad y la flexibilidad necesarias para tener el control de sus inversiones.</p>
            </div>
            <div className="service-item-container">
                <div className="service-item">
                    <div className="service-symbol"><p>  </p></div>
                    <h3>Trading Desk</h3>
                    <p>Contamos con operadores profesionales certificados por la Bolsa de Valores de Asunción. Ofrecemos servicios de ejecución de órdenes en renta fija (títulos públicos y privados), renta variable (acciones e índices) así como también de fondos de inversión y fondos mutuos.</p>
                </div>
                <div className="service-item">
                    <div className="service-symbol"></div>
                    <h3>Custodia</h3>
                    <p>Brindamos servicios de custodia para todo tipo de activos financieros locales e internacionales. Accedemos  al Mercado de Valores de Paraguay y mantenemos acuerdos de custodia y liquidación con las instituciones más confiables de la industria en el ámbito internacional.</p>
                </div>
                <div className="service-item">
                    <div className="service-symbol"></div>
                    <h3>Consultoría</h3>
                    <p>Ofrecemos asesoramiento integral a personas y empresas que busquen acceder al mercado bursátil y extrabursátil. Acompañamos a aquellas entidades que deseen cotizar en la Bolsa de Valores promoviendo el lanzamiento de emisiones públicas y privadas y su colocación en el mercado.</p>
                </div>
            </div>
        </div>
    )
}
