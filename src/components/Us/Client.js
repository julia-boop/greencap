import React from 'react'
import './Client.css'

export default function Client() {
    return (
        <div className="main-container-c">
            <div className="client-container">
                <h5>CLIENTES</h5>
                <h1>Quiénes confían en nosotros?</h1>
                <p>En Green Capital trabajamos para identificar los instrumentos financieros que se adapten al perfil de inversión de nuestros clientes.</p>
                <p>Orientados a resultados, optimizamos carteras basados en la amplia gama de productos que ofrece el mercado financiero. </p>
                <p>Además de ofrecer un canal efectivo de comunicación entre asesores y comitentes para brindar soluciones financieras de forma rápida y precisa.</p>
            </div>
            <div className="accordeon-container">
                <div class="accordion accordion-c" id="accordionExample">
                    <div class="card card-c individual">
                        <div className="symbols"><div className="long"></div><div className="short"></div><div className="short"></div></div>
                        <div class="card-header card-header-c" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-link-c btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Individuos
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body card-body-c">
                        Green Capital ofrece a los inversores individuales  un enfoque personalizado y una amplia gama de herramientas de inversión para ayudarlas a alcanzar sus objetivos financieros a largo plazo
                        </div>
                        </div>
                    </div>
                    <div class="card card-c coorporate">
                        <div className="symbols"><div className="short"></div><div className="long"></div><div className="short"></div></div>
                        <div class="card-header card-header-c" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-link-c btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Corporate
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body card-body-c">
                        Al elegir Green Capital, los clientes corporativos pueden estar seguros de recibir una solución de inversión a medida que se ajusta a sus necesidades corporativas y a sus planes de negocio. 
                        </div>
                        </div>
                    </div>
                    <div class="card card-c institution">
                        <div className="symbols"><div className="short"></div><div className="short"></div><div className="long"></div></div>
                        <div class="card-header card-header-c" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-link-c btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Instituciones
                            </button>
                        </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body card-body-c">
                        Green Capital ofrece a las instituciones un enfoque personalizado y una amplia gama de herramientas de inversión para ayudarlas a alcanzar sus objetivos financieros a largo plazo.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
