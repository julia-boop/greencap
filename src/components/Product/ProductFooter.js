import React from 'react'
import './ProductFooter.css'
import {useTranslation} from 'react-i18next';

export default function ProductFooter() {

    const {t} = useTranslation();

    return (
        <div className="info-container">
            <div className="info-img-container">
                <img src="/items/logo4.png" alt="logo"></img>
            </div>
            <div className="info-text-container">
                <div className="info-items">
                    <p id="u">{t('info.button')}</p>
                    <p>{t('info.address1')} <br></br> {t('info.address2')} <br></br> <b>{t('info.address3')}</b></p>
                    <br></br>
                    <p>i{t('info.mail')} <br></br>{t('info.phone')}</p>
                </div>
                <div className="info-items">
                    <p id="u">{t('info.help')}</p>
                    <p id="u">{t('info.priv-pol')}</p>
                    <p id="u">{t('info.terms')}</p>
                    <br></br>
                    <p id="trademark">{t('info.trademark')}</p>
                </div>                        
            </div>
        </div>
    )
}
