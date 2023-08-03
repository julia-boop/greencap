import React from 'react'
import './Main.css'

export default function Main() {
    return (
        <div className="main-container">
            <div className="nav-container">
                <div className="nav-img-container">
                    <a href="/">
                        <img src="/items/logo1.png" alt="logo"></img>
                    </a>                </div>
                <div className="nav-link-container">
                    <ul className="nav-link">
                        <li> <a href="/us"> Nosotros </a> </li>
                        <li> <a href="/product"> Productos & Servicios </a> </li>
                        <li> <a href="/faqs"> FAQs </a> </li>
                        <li id="contact"> <a href="/contact"> Contacto </a> </li>
                    </ul>
                </div>
            </div>
            <div className="content-container">
                <div className="main-text-container">
                    <h1>Brindamos herramientas para que invertir en <b>Paraguay</b> sea <b>simple y seguro.</b></h1>
                </div>
                <div className="subtext-container">
                    <img src="/items/logo2.png" alt="logo-symbol"></img>
                    <h4>Soluciones y alternativas a medida de las necesidades de cada cliente</h4>
                </div>
                <div className="btn-container">
                    <button> <a href="/contact">Contáctanos</a></button>
                </div>
            </div>
        </div>
    )
}
