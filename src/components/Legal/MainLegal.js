import React, {useContext} from 'react'
import './MainLegal.css'
import {useTranslation} from 'react-i18next';
import {LanguageContext} from '../../LanguageContext'

function MainLegal() {

    const {t} = useTranslation();

    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div className="main-container-legal">
            <div className="nav-container-legal">
                <div className="nav-img-container-legal">
                    <a href="/">
                        <img src="/items/logo1.png" alt="logo"></img>
                    </a>
                </div>
                <div className="nav-link-container-legal">
                    <ul className="nav-link-legal">
                        <li> <a href="/us">{t('menu.us')}</a> </li>
                        <li> <a id="active" href="/legal"> {t('menu.legal')} </a> </li>
                        <li> <a href="/product"> {t('menu.products')} </a> </li>
                        <li> <a href="/faqs"> {t('menu.faqs')} </a> </li>
                        <li id="contact"> <a href="/contact"> {t('menu.contact')} </a> </li>
                        <li id="contact"> <a href="http://app.greencapital.com.py/greenhb17/wplogin.aspx"> {t('menu.client-area')} </a> </li>
                        <li>
                            <button className="lang-btn" onClick={toggleLanguage}>{language === 'es' ? 'ENG' : 'ESP'}</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about-container">
                <h5>{t('main-legal.label')}</h5>
                <div className="know-more">
                    <h1>{t('main-legal.title')}</h1>
                </div>
                <div className="join">
                    <img src="/items/logo2.png" alt="logo"></img>
                    <h4>{t('main-legal.subtitle')}</h4>
                </div>
            </div>
            <div className="cnv">
                    <p>{t('main-legal.text1')}<a href="https://siv.bcp.gov.py/">{t('main-legal.link')}</a>{t('main-legal.text2')}</p>
            </div>
        </div>
    )
}

export default MainLegal
