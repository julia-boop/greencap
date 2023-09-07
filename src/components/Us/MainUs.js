import React from 'react'
import './Us.css'

export default function MainUs() {
    return (
        <div className="main-container-us">
            <div className="nav-container-us">
                <div className="nav-img-container-us">
                    <a href="/">
                        <img src="/items/logo1.png" alt="logo"></img>
                    </a>                </div>
                <div className="nav-link-container-us">
                    <ul className="nav-link-us">
                        <li> <a id="active" href="/us"> Nosotros </a> </li>
                        <li> <a href="/legal"> Legal </a> </li>
                        <li> <a href="/product"> Productos & Servicios </a> </li>
                        <li> <a href="/faqs"> FAQs </a> </li>
                        <li id="contact"> <a href="/contact"> Contacto </a> </li>
                    </ul>
                </div>
            </div>
            <div className="about-container">
                <h5>ACERCA DE NOSOTROS</h5>
                <div className="know-more">
                    <h1>Conocé a </h1>
                    <img src="/items/logo1-us.png" alt="logo"></img>
                </div>
                <div className="join">
                    <img src="/items/logo2.png" alt="logo"></img>
                    <h4>Somos una Casa de Bolsa inscripta en la Bolsa de Valores de Asunción (BVA) y en la Comisión Nacional de Valores (CNV) de la República del Paraguay desde el año 2023. Green Capital se encuentra autorizada para operar en el Mercado de Valores local e internacional.</h4>
                </div>
            </div>
        </div>
    )
}
