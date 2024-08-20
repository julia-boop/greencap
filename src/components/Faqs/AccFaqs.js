import React from 'react'
import './AccFaqs.css'
import {useTranslation} from 'react-i18next';

export default function AccFaqs() {

    const {t} = useTranslation();

    return (
        <div className="acc-container">
            <div className="title-acc-container">
                <h5>{t('faqs.label')}</h5>
                <h1>{t('faqs.title')}</h1>
            </div>
            <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {t('faqs.ques1')}
                    </button>
                </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        {t('faqs.ans1')}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {t('faqs.ques2')}
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        {t('faqs.ans2')}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {t('faqs.ques3')}
                    </button>
                </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        {t('faqs.ans3')}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingFour">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        {t('faqs.ques4')}
                    </button>
                </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-body">
                        {t('faqs.ans4')}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingSix">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    {t('faqs.ques5')}
                    </button>
                </h2>
                </div>
                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                    <div className="card-body">
                        {t('faqs.ans5')}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
