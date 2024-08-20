import React from 'react'
import './Solution.css'
import {useTranslation} from 'react-i18next';

export default function Solution() {

    const {t} = useTranslation();

    return (
        <div className="solution-container">
            <img src="/items/logo2.png" alt="logo"></img>
            <h1 id="dk">{t('solution.title')}</h1>
            <h1 id="mb">{t('solution.subtitle')}</h1>
            <p>------------------------------------------------------------------------------------------------------------------------</p>
            <h5>{t('solution.text')}</h5>
        </div>
    )
}
