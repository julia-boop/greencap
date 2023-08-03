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
                    <li> <a href="/product"> Productos & Servicios </a> </li>
                    <li> <a href="/faqs"> FAQs </a> </li>
                    <li id="contact"> <a href="/contact"> Contacto </a> </li>
                </ul>
            </div>
        </div>
        <div className="cont-container">
            <h5>CONTACTO</h5>
            <div className="cont-know-more">
                <h1>Conviértase en parte del equipo de Green Capital</h1>
            </div>
            <div className="cont-join">
                <img src="/items/logo2.png" alt="logo"></img>
                <h4>Únete a la red de Green Capital y comienza a invertir.</h4>
            </div>
        </div>
    </div>

    )
}
