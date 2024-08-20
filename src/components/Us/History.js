import React from 'react'
import './History.css'
import {useTranslation} from 'react-i18next';

export default function History() {
    const {t} = useTranslation();

    return (
        <div>
            <div className="history-container">
                <h6>{t('history.label')}</h6>
    <h1>{t('history.title')}</h1>
                <p>{t('history.text1')}</p>
                <p>{t('history.text2')}</p>
            </div>
            <div className="oval">
                <h2>{t('history.tag1')} <hr width="1" size="20" /> <hr width="1" size="12" /> <hr width="1" size="2" /></h2>
                <h2 id="mid">{t('history.tag2')} <hr width="1" size="20" /> <hr width="1" size="12" /> <hr width="1" size="2" /></h2>
                <h2>{t('history.tag3')} <hr width="1" size="20" /> <hr width="1" size="12" /> <hr width="1" size="2" /></h2>
            </div>
        </div>
    )
}
