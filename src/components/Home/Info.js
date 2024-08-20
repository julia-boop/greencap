import React from 'react'
import './Info.css'
import {useTranslation} from 'react-i18next';

export default function Info() {
    const {t} = useTranslation();

    return (
        <div>
            <div className="learn-more-container">
                <h1>{t('info.title')}</h1>
                <img src="/items/logo3.png" alt="logo"></img>
                <button> <a href="/contact">{t('info.button')}</a></button>
            </div>
            <div className="info-container">
                <div className="info-img-container">
                    <img src="/items/logo4.png" alt="logo"></img>
                </div>
                <div className="info-text-container">
                    <div className="info-items">
                        <p id="u">{t('info.button')}</p>
                        <p> {t('info.address1')} <br></br> {t('info.address2')} <br></br> <b> {t('info.address3')} </b></p>
                        <br></br>
                        <p>{t('info.mail')} <br></br>{t('info.phone')}</p>
                    </div>
                    <div className="info-items">
                        <p id="desc">{t('info.disclaimer')}</p>
                        <br></br>
                        <p id="trademark">{t('info.trademark')}</p>
                    </div>                        
                </div>
            </div>
        </div>
    )
}
