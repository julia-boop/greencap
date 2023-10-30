import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import './Balances.css'

function Balances() {
    return (
        <div className="balances-main-container">
            <div className="balances-title-container">
                <h5>BALANCES</h5>
                <h1>Estados Financieros</h1>
                <p>Haz click para descargar</p>
            </div>
            <div className="balances-container">
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/31-12-2022.pdf">31.12.2022 - Green Capital</a>
                </div>
            </div>
        </div>
    )
}

export default Balances
