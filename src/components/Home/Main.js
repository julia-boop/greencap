import React, {useContext} from 'react'
import './Main.css'
import {useTranslation} from 'react-i18next';
import { LanguageContext } from '../../LanguageContext';

export default function Main() {
    const {t} = useTranslation();

    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div className="main-container">
            <div className="nav-container">
                <div className="nav-img-container">
                    <a href="/">
                        <img src="/items/logo1.png" alt="logo"></img>
                    </a>                </div>
                <div className="nav-link-container">
                    <ul className="nav-link">
                        <li> <a href="/us"> {t('menu.us')} </a> </li>
                        <li> <a href="/legal"> {t('menu.legal')} </a> </li>
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
            <div className="content-container">
                <div className="main-text-container">
                    <h1>{t('main.paragraph')} <b>{t('main.paragraph-bold')}</b></h1>
                </div>
                <div className="subtext-container">
                    <img src="/items/logo2.png" alt="logo-symbol"></img>
                    <h4>{t('main.subparagraph')}</h4>
                </div>
                <div className="btn-container">
                    <button> <a href="/contact">{t('main.button')}</a></button>
                </div>
            </div>
        </div>
    )
}
