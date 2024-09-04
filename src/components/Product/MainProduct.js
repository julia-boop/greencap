import React, {useContext} from 'react'
import './MainProduct.css'
import {useTranslation} from 'react-i18next';
import {LanguageContext} from '../../LanguageContext'

export default function MainProduct() {

    const {t} = useTranslation();

    const { language, setLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
      const newLanguage = language === 'es' ? 'en' : 'es';
      setLanguage(newLanguage);
    };
    
    return (
    <div className="main-container-prod">
        <div className="nav-container-prod">
            <div className="nav-img-container-us">
                <a href="/">
                    <img src="/items/logo1.png" alt="logo"></img>
                </a>            
            </div>
            <div className="nav-link-container-prod">
                <ul className="nav-link-prod">
                        <li> <a href="/us">{t('menu.us')}</a> </li>
                        <li> <a href="/legal"> {t('menu.legal')} </a> </li>
                        <li> <a id="active" href="/product"> {t('menu.products')} </a> </li>
                        <li> <a href="/faqs"> {t('menu.faqs')} </a> </li>
                        <li id="contact"> <a href="/contact"> {t('menu.contact')} </a> </li>
                        <li id="contact"> <a href="http://app.greencapital.com.py/greenhb17/wplogin.aspx"> {t('menu.client-area')} </a> </li>
                        <li>
                            <button className="lang-btn" onClick={toggleLanguage}>{language === 'es' ? 'ENG' : 'ESP'}</button>
                        </li>
                </ul>
            </div>
        </div>
        <div className="prod-container">
            <h5>{t('main-product.label')}</h5>
            <div className="prod-know-more">
                <h1>{t('main-product.title')}</h1>
            </div>
            <div className="prod-join">
                <img src="/items/logo2.png" alt="logo"></img>
                <h4>{t('main-product.subtitle')}</h4>
            </div>
        </div>
    </div>
    )
}
