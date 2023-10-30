import React from 'react'
import './ProductFooter.css'

export default function ProductFooter() {
    return (
        <div className="info-container">
            <div className="info-img-container">
                <img src="/items/logo4.png" alt="logo"></img>
            </div>
            <div className="info-text-container">
                <div className="info-items">
                    <p id="u">Contacto</p>
                    <p>Av. Aviadores del Chaco 2050, <br></br> Complejo World Trade Center Torre III, Piso 11 <br></br> <b>Asunción - Paraguay</b></p>
                    <br></br>
                    <p>info@greencapital.com.py <br></br>+(595)21 326 7085</p>
                </div>
                <div className="info-items">
                    <p id="u">Ayuda</p>
                    <p id="u">Politicas de Privacidad</p>
                    <p id="u">Terminos y Condiciones</p>
                    <br></br>
                    <p id="trademark">© Green Capital, 2023.</p>
                </div>                        
            </div>
        </div>
    )
}
