import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './DetailProduct.css'
import {useTranslation} from 'react-i18next';

export default function DetailProduct() {

    const {t} = useTranslation();

    return (
        <div className="product-detail-container">
            <div className="product-title-container">
                <h5>{t('detail-prod.label')}</h5>
                <h1>{t('detail-prod.title')}</h1>
                <p>{t('detail-prod.subtitle')}</p>
            </div>
            <div className="product-item-main-container">
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>                        
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>
                    <div className="product-name">
                        <h4>{t('detail-prod.prod1')}</h4>
                    </div>
                </div>
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>            
                    <div className="product-name">
                        <h4>{t('detail-prod.prod2')}</h4>
                    </div>
                </div>
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>
                    <div className="product-name">
                        <h4>{t('detail-prod.prod3')}</h4>
                    </div>
                </div>
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>
                    <div className="product-name">
                        <h4>{t('detail-prod.prod4')}</h4>
                    </div>
                </div>
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>
                    <div className="product-name">
                        <h4>{t('detail-prod.prod5')}</h4>
                    </div>
                </div>
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>
                    <div className="product-name">
                        <h4>{t('detail-prod.prod6')}</h4>
                    </div>
                </div>
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>
                    <div className="product-name">
                        <h4>{t('detail-prod.prod7')}</h4>
                    </div>
                </div>
                <div className="product-item-container">
                    <div className="product-symbol">
                        <div className="test">
                            <div className="long-product"></div>
                            <div className="short-product"></div>
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} style={{color: "#14c38e",}} />
                        </div>
                    </div>
                    <div className="product-name">
                        <h4>{t('detail-prod.prod8')}</h4>
                    </div>
                </div>
            </div>
            <div className="epigraph-container">
                <p>{t('detail-prod.epigraph')}</p>
            </div>
        </div>
    )
}
