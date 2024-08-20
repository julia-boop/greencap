import React from 'react'
import './Offer.css'
import {useTranslation} from 'react-i18next';

export default function Offer() {
    const {t} = useTranslation();

    return (
        <div className="main-container-o">
            <div className="offer-container">
                <div className="offer-items">
                    <h5>{t('offer.title1')}</h5>
                    <h1>{t('offer.subtitle1')}</h1>
                    <h6>{t('offer.text1')}</h6>
                    <button> <a href="/product">{t('offer.button1')}</a></button>
                </div>
                <div className="offer-img-container">
                    <img src="/items/frame3.png" alt="some"></img>
                </div>
            </div>
            <div className="service-container"> 
                <div className="service-img-container">
                    <img src="/items/frame4.png" alt="img"></img>
                </div>
                <div className="service-items">
                    <h5>{t('offer.title2')}</h5>
                    <h1>{t('offer.subtitle2')}</h1>
                    <h6>{t('offer.text2')}</h6>
                    <button> <a href="/product">{t('offer.button2')}</a></button>
                </div>
            </div>
        </div>
    )
}
