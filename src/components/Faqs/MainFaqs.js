import React from 'react'

export default function MainFaqs() {
    return (
    <div className="main-container-faq">
        <div className="nav-container-faq">
            <div className="nav-img-container-us">
                <a href="/">
                    <img src="/items/logo1.png" alt="logo"></img>
                </a>            </div>
            <div className="nav-link-container-faq">
                <ul className="nav-link-us">
                    <li> <a href="/us"> Nosotros </a> </li>
                    <li> <a href="/product"> Productos & Servicios </a> </li>
                    <li> <a id="active" href="/faqs"> FAQs </a> </li>
                    <li id="contact"> <a href="/contact"> Contacto </a> </li>
                </ul>
            </div>
        </div>
        <div className="faq-container">
            <h5>FAQ'S</h5>
            <div className="faq-know-more">
                <h1>Todo lo que necesitas saber acerca de Green Capital</h1>
            </div>
            <div className="faq-join">
                <img src="/items/logo2.png" alt="logo"></img>
                <h4>Únete a la red de Green Capital y comienza a invertir.</h4>
            </div>
        </div>
    </div>
    )
}
