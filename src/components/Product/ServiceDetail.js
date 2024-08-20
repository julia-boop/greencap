import React from 'react'
import './ServiceDetail.css'
import {useTranslation} from 'react-i18next';

export default function ServiceDetail() {

    const {t} = useTranslation();

    return (
        <div className="service-detail-container">
            <div className="service-title-container">
                <h5>{t('detail-serv.label')}</h5>
                <h1>{t('detail-serv.title')}</h1>
                <p>{t('detail-serv.subtitle')}</p>
            </div>
            <div className="service-item-container">
                <div className="service-item">
                    <div className="service-symbol"><p>  </p></div>
                    <h3>{t('detail-serv.serv1-title')}</h3>
                    <p>{t('detail-serv.serv1-text')}</p>
                </div>
                <div className="service-item">
                    <div className="service-symbol"></div>
                    <h3>{t('detail-serv.serv2-title')}</h3>
                    <p>{t('detail-serv.serv2-text')}</p>
                </div>
                <div className="service-item">
                    <div className="service-symbol"></div>
                    <h3>{t('detail-serv.serv3-title')}</h3>
                    <p>{t('detail-serv.serv3-text')}</p>
                </div>
            </div>
        </div>
    )
}
