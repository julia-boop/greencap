import React from 'react'
import './Team.css'
import {useTranslation} from 'react-i18next';

export default function Team() {

    const {t} = useTranslation();

    return (
        <div className="main-container-team">
            <h5>{t('team.label')}</h5>
            <h1>{t('team.title')}</h1>
            <div className="team-member-container">
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>{t('team.name1')}</h2>
                    <h5>{t('team.pos1')}</h5>
                    <p>{t('team.desc1')}</p>
                </div>
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>{t('team.name2')}</h2>
                    <h5>{t('team.pos2')}</h5>
                    <p>{t('team.desc2')}</p>
                </div>
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>{t('team.name3')}</h2>
                    <h5>{t('team.pos3')}</h5>
                    <p>{t('team.desc3')}</p>
                </div>
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>{t('team.name4')}</h2>
                    <h5>{t('team.pos4')}</h5>
                    <p>{t('team.desc4')}</p>
                </div>
            </div>
        </div>
    )
}
