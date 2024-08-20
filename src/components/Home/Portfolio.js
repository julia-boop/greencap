import React from 'react'
import './Portfolio.css'
import {useTranslation} from 'react-i18next';

export default function Portfolio() {
    const {t} = useTranslation();

    return (
        <div className="main-container-p">
            <div className="white-container">
                <div className="transform-container">
                    <h1 id="colored">{t('portfolio.title-coloured')} </h1> <h1>{t('portfolio.title')}</h1>
                </div>
                <div className="text-container">
                    <div>
                        <h3>{t('portfolio.subtitle1')}</h3>
                        <h5>{t('portfolio.text1')}<b>{t('portfolio.text1-bold1')}</b>{t('portfolio.text1.2')}<b>{t('portfolio.text1-bold2')}</b></h5>
                    </div>
                    <div>
                        <h3>{t('portfolio.subtitle2')}</h3>
                        <h5>{t('portfolio.text2')}<b>{t('portfolio.text2-bold')}</b></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
