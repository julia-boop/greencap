import React from 'react'

function Pdf() {
    return (
        <div className="pdf-container">
            <div className="pdf-item">
                <div className="pdf-item-img">
                    <img src="/items/cnv.png"></img>
                </div>
                <a href="/pdf/Licencia.pdf" download><p>Inscripción en la CNV</p></a>
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">
                    <img src="/items/logo2.png"></img>
                </div>
                <a href="/pdf/CodigoEtica.pdf" download><p>Código de ética</p></a>
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">
                    <img src="/items/bva.png"></img>
                </div>
                <a href="/pdf/InscripcionBVA.pdf" download><p>Inscripción en la Bolsa de Valores de Asunción</p></a>                
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">  
                    <img src="/items/bva.png"></img><img></img>
                </div>
                <a href="/pdf/AccionBVA.pdf" download><p>Acción de la Bolsa de Valores de Asunción</p></a>
            </div>
        </div>
    )
}

export default Pdf
