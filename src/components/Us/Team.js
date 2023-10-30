import React from 'react'
import './Team.css'

export default function Team() {
    return (
        <div className="main-container-team">
            <h5>QUIÉNES SOMOS</h5>
            <h1>Nuestro Equipo</h1>
            <div className="team-member-container">
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>Cr. Carlos Casarotti</h2>
                    <h5>CEO</h5>
                    <p>Contador Público y Licenciado en Administración de Empresas (UDELAR – Uruguay). Más de 20 años de trayectoria en el área financiera bursátil. Se desempeñó como accionista y miembro de la Bolsa de Valores de Montevideo – Uruguay desarrollando actividad operativa de compra y venta de valores, administración de carteras, asesoramiento financiero y servicios de custodia para clientes corporativos.</p>
                </div>
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>Lic. Sebastián Chocho</h2>
                    <h5>COO</h5>
                    <p>Administrador de empresas y Contador Público (UDESA – Argentina). Posgrado en Negocios y Tecnología (UDESA – Argentina). Operador Certificado (BVA – Paraguay). 10 Años de experiencia en consultoría de management, procesos y sistemas en clientes multinacionales en Argentina, Venezuela, España, Uruguay y Paraguay. Desde 2019 dedicado al desarrollo y dirección de empresas en Paraguay.</p>
                </div>
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>Cr. Camilo Calvelo</h2>
                    <h5>CFO</h5>
                    <p>Contador Público, (UDELAR – Uruguay). Posgrado en Gestión de Portafolios de Inversión (UM – Uruguay). Diplomatura en Planificación Patrimonial y Fiscalidad Internacional (UCEMA – Argentina). Operador certificado (BVA – Paraguay). Desde 2015 trabajando en el sector financiero, específicamente en el mercado de capitales. Cuenta con una larga trayectoria en funciones de asesoramiento en finanzas corporativas, planificación financiera de la empresa, flujos de fondos y evaluación de proyectos de inversión.</p>
                </div>
                <div className="team-member">
                    <img src="/items/team.png" alt="hidden"></img>
                    <h2>Ec. Emilia Bazzano</h2>
                    <h5>CCO</h5>
                    <p>Licenciada en Economía, (UDELAR – Uruguay) y Operadora certificada (BVA – Paraguay). Master en Administración de Empresas (EAE Business School – España). Posee una amplia experiencia en asesoramiento y consultoría financiera en diversos sectores, investigación de mercado, elaboración de planes de negocios, flujos de fondos y evaluación de proyectos de inversión.</p>
                </div>
            </div>
        </div>
    )
}
