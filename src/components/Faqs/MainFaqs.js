import React, {useContext} from 'react';
import './MainFaqs.css';
import {useTranslation} from 'react-i18next';
import {LanguageContext} from '../../LanguageContext'

export default function MainFaqs() {

    const {t} = useTranslation();

    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
    <div className="main-container-faq">
        <div className="nav-container-faq">
            <div className="nav-img-container-us">
                <a href="/">
                    <img src="/items/logo1.png" alt="logo"></img>
                </a>            </div>
            <div className="nav-link-container-faq">
                <ul className="nav-link-us">
                <li> <a href="/us"> {t('menu.us')} </a> </li>
                        <li> <a href="/legal"> {t('menu.legal')} </a> </li>
                        <li> <a href="/product"> {t('menu.products')} </a> </li>
                        <li> <a id="active" href="/faqs"> {t('menu.faqs')} </a> </li>
                        <li id="contact"> <a href="/contact"> {t('menu.contact')} </a> </li>
                        <li id="contact"> <a href="http://app.greencapital.com.py/greenhb17/wplogin.aspx"> {t('menu.client-area')} </a> </li>
                        <li>
                            <button className="lang-btn" onClick={toggleLanguage}>{language === 'es' ? 'ENG' : 'ESP'}</button>
                        </li>
                </ul>
            </div> 
        </div>
        <div className="faq-container">
            <h5>{t('main-faqs.label')}</h5>
            <div className="faq-know-more">
                <h1>{t('main-faqs.title')}</h1>
            </div>
            <div className="faq-join">
                <img src="/items/logo2.png" alt="logo"></img>
                <h4>{t('main-faqs.subtitle')}</h4>
            </div>
        </div>
    </div>
    )
}
