import React, {useContext} from 'react'
import './MainContact.css'
import {useTranslation} from 'react-i18next';
import {LanguageContext} from '../../LanguageContext';

export default function MainContact() {

    const {t} = useTranslation();

    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
    <div className="main-container-cont">
        <div className="nav-container-cont">
            <div className="nav-img-container-us">
                <a href="/">
                    <img src="/items/logo1.png" alt="logo"></img>
                </a>
            </div>
            <div className="nav-link-container-cont">
                <ul className="nav-link-cont">
                       <li> <a href="/legal"> {t('menu.legal')} </a> </li>
                        <li> <a href="/product"> {t('menu.products')} </a> </li>
                        <li> <a href="/faqs"> {t('menu.faqs')} </a> </li>
                        <li id="contact-a"> <a href="/contact"> {t('menu.contact')} </a> </li>
                        <li id="contact"> <a href="http://app.greencapital.com.py/greenhb17/wplogin.aspx"> {t('menu.client-area')} </a> </li>
                        <li>
                            <button className="lang-btn" onClick={toggleLanguage}>{language === 'es' ? 'English' : 'Español'}</button>
                        </li>
                </ul>
            </div>
        </div>
        <div className="cont-container">
            <h5>{t('main-cont.label')}</h5>
            <div className="cont-know-more">
                <h1>{t('main-cont.title')}</h1>
            </div>
            <div className="cont-join">
                <img src="/items/logo2.png" alt="logo"></img>
                <h4>{t('main-cont.subtitle')}</h4>
            </div>
        </div>
    </div>

    )
}
