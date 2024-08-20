import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './Balances.css';
import {useTranslation} from 'react-i18next';

function Balances() {

    const {t} = useTranslation();

    return (
        <div className="balances-main-container">
            <div className="balances-title-container">
                <h5>{t('balances.label')}</h5>
                <h1>{t('balances.title')}</h1>
                <p>{t('balances.link')}</p>
            </div>
            <div className="balances-container">
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/31-12-2022.pdf" download>{t('balances.balance1')}</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/30-06-2023.zip" download>{t('balances.balance2')}</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/30-09-2023.zip" download>{t('balances.balance3')}</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/31-12-2023.zip" download>{t('balances.balance4')}</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/31-03-2024.zip" download>{t('balances.balance5')}</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/30-06-2024.zip" 
                    download>{t('balances.balance6')}</a>
                </div>
            </div>
            <div className="siv-legal-container">
                <h5>{t('balances.link1')}<a href="https://siv.bcp.gov.py/?page_id=5476">{t('balances.link2')}</a></h5>
            </div>
        </div>
    )
}

export default Balances
