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
                        <li> <a href="/product"> Productos & Servicios </a> </li>
                        <li> <a href="/faqs"> FAQs </a> </li>
                        <li id="contact"> <a href="/contact"> Contacto </a> </li>
                    </ul>
                </div>
            </div>
            <div className="about-container">
                <h5>ACERCA DE NOSOTROS</h5>
                <div className="know-more">
                    <h1>Conoce a </h1>
                    <img src="/items/logo1-us.png" alt="logo"></img>
                </div>
                <div className="join">
                    <img src="/items/logo2.png" alt="logo"></img>
                    <h4>Únete a la red de Green Capital y comienza a invertir.</h4>
                </div>
            </div>
        </div>
    )
}
