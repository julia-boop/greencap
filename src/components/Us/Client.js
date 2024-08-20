import React from 'react'
import './Client.css'
import {useTranslation} from 'react-i18next';


export default function Client() {
    const {t} = useTranslation();

    return (
        <div className="main-container-c">
            <div className="client-container">
                <h5>{t('client.label')}</h5>
                <h1>{t('client.title')}</h1>
                <p>{t('client.subtitle1')}</p>
                <p>{t('client.subtitle2')}</p>
                <p>{t('client.subtitle3')}</p>
            </div>
            <div className="accordeon-container">
                <div class="accordion accordion-c" id="accordionExample">
                    <div class="card card-c individual">
                        <div className="symbols"><div className="long"></div><div className="short"></div><div className="short"></div></div>
                        <div class="card-header card-header-c" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-link-c btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {t('client.card1-title')}
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body card-body-c">
                        {t('client.card1-text')}
                        </div>
                        </div>
                    </div>
                    <div class="card card-c coorporate">
                        <div className="symbols"><div className="short"></div><div className="long"></div><div className="short"></div></div>
                        <div class="card-header card-header-c" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-link-c btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            {t('client.card2-title')}
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body card-body-c">
                        {t('client.card2-text')}
                        </div>
                        </div>
                    </div>
                    <div class="card card-c institution">
                        <div className="symbols"><div className="short"></div><div className="short"></div><div className="long"></div></div>
                        <div class="card-header card-header-c" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-link-c btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            {t('client.card3-title')}
                            </button>
                        </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body card-body-c">
                        {t('client.card3-text')}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
