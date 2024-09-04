import React, {useContext} from 'react'
import './MainUs.css'
import {useTranslation} from 'react-i18next';
import {LanguageContext} from '../../LanguageContext'

export default function MainUs() {

    const {t} = useTranslation();

    const { language, setLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
      const newLanguage = language === 'es' ? 'en' : 'es';
      setLanguage(newLanguage);
    };
      
    return (
        <div className="main-container-us">
            <div className="nav-container-us">
                <div className="nav-img-container-us">
                    <a href="/">
                        <img src="/items/logo1.png" alt="logo"></img>
                    </a>                </div>
                <div className="nav-link-container-us">
                    <ul className="nav-link-us">
                        <li> <a id="active" href="/us">{t('menu.us')}</a> </li>
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
            <div className="about-container">
                <h5>{t('main-us.title')}</h5>
                <div className="know-more">
                    <h1>{t('main-us.subtitle')}</h1>
                    <img src="/items/logo1-us.png" alt="logo"></img>
                </div>
                <div className="join">
                    <img src="/items/logo2.png" alt="logo"></img>
                    <h4>{t('main-us.text')}</h4>
                </div>
            </div>
        </div>
    )
}
