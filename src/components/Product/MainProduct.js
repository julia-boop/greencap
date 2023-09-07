import React from 'react'

export default function MainProduct() {
    return (
    <div className="main-container-prod">
        <div className="nav-container-prod">
            <div className="nav-img-container-us">
                <a href="/">
                    <img src="/items/logo1.png" alt="logo"></img>
                </a>            </div>
            <div className="nav-link-container-prod">
                <ul className="nav-link-us">
                    <li> <a href="/us"> Nosotros </a> </li>
                    <li> <a href="/legal"> Legal </a> </li>
                    <li> <a id="active" href="/product"> Productos & Servicios </a> </li>
                    <li> <a href="/faqs"> FAQs </a> </li>
                    <li id="contact"> <a href="/contact"> Contacto </a> </li>
                </ul>
            </div>
        </div>
        <div className="prod-container">
            <h5>PRODUCTOS & SERVICIOS</h5>
            <div className="prod-know-more">
                <h1>La manera más segura y eficiente de invertir.</h1>
            </div>
            <div className="prod-join">
                <img src="/items/logo2.png" alt="logo"></img>
                <h4>Únete a la red de Green Capital y comienza a invertir.</h4>
            </div>
        </div>
    </div>
    )
}
