import React from 'react'

function MainLegal() {
    return (
        <div className="main-container-legal">
            <div className="nav-container-legal">
                <div className="nav-img-container-legal">
                    <a href="/">
                        <img src="/items/logo1.png" alt="logo"></img>
                    </a>                </div>
                <div className="nav-link-container-legal">
                    <ul className="nav-link-legal">
                        <li> <a  href="/us"> Nosotros </a> </li>
                        <li> <a id="active" href="/legal"> Legal </a> </li>
                        <li> <a href="/product"> Productos & Servicios </a> </li>
                        <li> <a href="/faqs"> FAQs </a> </li>
                        <li id="contact"> <a href="/contact"> Contacto </a> </li>
                        {/* <li id="contact"> <a href="http://192.168.110.2/GREENHB17/WpLOGIN.ASPX"> Home Banking </a> </li> */}
                    </ul>
                </div>
            </div>
            <div className="about-container">
                <h5>LEGAL</h5>
                <div className="know-more">
                    <h1>Regulaciones y Legales de Green Capital </h1>
{/*                     <img src="/items/logo1-us.png" alt="logo"></img>
 */}                </div>
                <div className="join">
                    <img src="/items/logo2.png" alt="logo"></img>
                    <h4>Únete a la red de Green Capital y comienza a invertir.</h4>
                </div>
            </div>
            <div className="cnv">
                    <p>Green Capital Casa de Bolsa S.A. se encuentra regulada por la <a href="https://www.cnv.gov.py/?page_id=5476">Superintendencia de Valores - Banco Central del Paraguay (SIV)</a> e inscripta según resolución N° 117 _04072023 del Registro del Mercado de Valores, Sección Casas de Bolsa de dicha institución. En el marco de su actividad, la compañía actúa en estricto cumplimiento de la normativa legal vigente a nivel nacional e internacional. El área de Cumplimiento fue creada con el fin de garantizar el seguimiento y la aplicación de dicha normativa nacional e internacional, políticas internas y las mejores prácticas aplicables en la materia.</p>
            </div>
        </div>
    )
}

export default MainLegal
