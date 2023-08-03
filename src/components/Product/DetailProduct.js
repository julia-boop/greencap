import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
export default function DetailProduct() {
    return (
        <div className="product-detail-container">
            <div className="product-title-container">
                <h5>PRODUCTOS</h5>
                <h1>Especialistas en el mercado financiero</h1>
                <p>Creemos en el mercado de capitales local del Paraguay y también en la diversificación, por lo que a través de nuestra Casa de Bolsa se brinda la posibilidad de invertir en:</p>
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
                        <h4>Acciones (Locales y del Exterior)</h4>
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
                        <h4>Bonos Soberanos y Corporativos (Locales y del Exterior)</h4>
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
                        <h4>Opciones</h4>
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
                        <h4>CDAs</h4>
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
                        <h4>ETFs</h4>
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
                        <h4>Fondos de Inversión y Fondos Mutuos (Locales y del Exterior)</h4>
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
                        <h4>Fideicomismos</h4>
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
                        <h4>Inversiones Alternativas</h4>
                    </div>
                </div>
            </div>
            <div className="epigraph-container">
                <p>Y una amplia gama de productos financieros tanto en el mercado local como en el internacional, además, realizamos la custodia de los títulos y el pago de servicios de dividendos y renta financiera. </p>
            </div>
        </div>
    )
}
