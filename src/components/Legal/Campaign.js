import React from 'react'
import './Campaign.css'
import {useTranslation} from 'react-i18next';

function Campaign() {

    const {t} = useTranslation();

    return (
        <div className="campaign-container">
            <div className="campaign-title-container">
                <h5>{t('campaign.label')}</h5>
                <h1>{t('campaign.title')}</h1>
            </div>
            <div className="campaign-text-container">
                <p>{t('campaign.text1')}</p>
                <p>{t('campaign.text2')}</p>
                <p>{t('campaign.text3')}</p>
                <br></br>
                <a href="https://drive.google.com/file/d/1-0_3WySsCRDouR9eWmZDpcyUeceSD0EA/view">{t('campaign.link')}</a>
            </div>
        </div>
    )
}

export default Campaign
