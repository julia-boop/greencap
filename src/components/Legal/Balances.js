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
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/30-06-2023.zip">30.06.2023 - Green Capital</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/30-09-2023.zip">30.09.2023 - Green Capital</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/31-12-2023.zip">31.12.2023 - Green Capital</a>
                </div>
                <div className="balance-item">
                    <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                    <a href="/balances/31-03-2024.zip">31.03.2024 - Green Capital</a>
                </div>
            </div>
            <div className="siv-legal-container">
                <h5>Los Estados Financieros de Green Capital CBSA pueden ser consultados tambien haciendo click <a href="https://siv.bcp.gov.py/?page_id=5476">aquí</a></h5>
            </div>
        </div>
    )
}

export default Balances
