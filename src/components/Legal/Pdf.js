import React from 'react'
import './Pdf.css'
import {useTranslation} from 'react-i18next';


function Pdf() {

    const {t} = useTranslation();

    return (
        <div className="pdf-container">
            <div className="pdf-item">
                <div className="pdf-item-img">
                    <img src="/items/cnv.png" alt="cnv"></img>
                </div>
                <a href="/pdf/Licencia.pdf" download><p>{t('pdfs.link1')}</p></a>
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">  
                    <img src="/items/cnv.png" alt="bva"></img>
                </div>
                <a href="/pdf/HabilitacionSIV.pdf" download><p>{t('pdfs.link2')}</p></a>
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">
                    <img src="/items/logo2.png" alt="logo"></img>
                </div>
                <a href="/pdf/CodigoEtica.pdf" download><p>{t('pdfs.link3')}</p></a>
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">  
                    <img src="/items/logo2.png" alt="bva"></img>
                </div>
                <a href="/pdf/ProcedimientoReclamos.pdf" download><p>{t('pdfs.link4')}</p></a>
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">
                    <img src="/items/bva.png" alt="bva"></img>
                </div>
                <a href="/pdf/InscripcionBVA.pdf" download><p>{t('pdfs.link5')}</p></a>                
            </div>
            <div className="pdf-item">
                <div className="pdf-item-img">  
                    <img src="/items/bva.png" alt="bva"></img>
                </div>
                <a href="/pdf/AccionBVA.pdf" download><p>{t('pdfs.link6')}</p></a>
            </div>
        </div>
    )
}

export default Pdf
