import React from 'react'

export default function MainContact() {
    return (
    <div className="main-container-cont">
        <div className="nav-container-cont">
            <div className="nav-img-container-us">
                <a href="/">
                    <img src="/items/logo1.png" alt="logo"></img>
                </a>
            </div>
            <div className="nav-link-container-cont">
                <ul className="nav-link-us">
                    <li> <a href="/us"> Nosotros </a> </li>
                    <li> <a href="/legal"> Legal </a> </li>
                    <li> <a href="/product"> Productos & Servicios </a> </li>
                    <li> <a href="/faqs"> FAQs </a> </li>
                    <li id="contact"> <a href="/contact"> Contacto </a> </li>
                </ul>
            </div>
        </div>
        <div className="cont-container">
            <h5>CONTACTO</h5>
            <div className="cont-know-more">
                <h1>Ponemos a su disposición nuestros canales de comunicación para ayudarle a solucionar cualquier duda.</h1>
            </div>
            <div className="cont-join">
                <img src="/items/logo2.png" alt="logo"></img>
                <h4>Green Capital Casa de Bolsa S.A. es una institución regulada y supervisada por la Comisión Nacional de Valores (CNV) de la República del Paraguay</h4>
            </div>
        </div>
    </div>

    )
}
