import React from 'react'

export default function AccFaqs() {
    return (
        <div className="acc-container">
            <div className="title-acc-container">
                <h5>FAQ'S</h5>
                <h1>Preguntas Frecuentes</h1>
            </div>
            <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ¿Por qué operar con Green Capital SA?
                    </button>
                </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                Como Casa de Bolsa registrada, Green Capital adhiere a todas las normas y buenas prácticas recomendadas por el mercado, y las operaciones caen bajo la órbita de la Comisión Nacional de Valores de Paraguay. Esto incluye la utilización de la última tecnología disponible aplicada al resguardo de sus datos.
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ¿Cuáles son los requisitos para abrir una cuenta?
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                Los requisitos para la apertura de cuenta varían según se trate de personas físicas o jurídicas. En el caso de las personas jurídicas se requerirá dependiendo de la naturaleza societaria, documentación que acredite tanto la conformación de la misma como la identidad y domicilio de sus representantes. Además de esto se requerirán por exigencia de la SIV una declaración de persona políticamente expuesta.
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    ¿Hay un importe mínimo para operar?
                    </button>
                </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                    No hay un monto mínimo para operar. Sin embargo los costos de mercado y de comisión imponen ciertos límites razonables.
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFour">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    ¿Qué comisión se cobra por operar? 
                    </button>
                </h2>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                <div class="card-body">
                    La comisión depende exclusivamente de la operación a realizar. Para consultar el cuadro vigente presione aquí
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingSix">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    ¿Debo abrir una cuenta para operar una única vez?
                    </button>
                </h2>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                <div class="card-body">
                    Por seguridad todas las operaciones son realizadas por comitentes aquí.
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
