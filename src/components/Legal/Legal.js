import React from 'react'
import Main from './MainLegal'
import Pdf from './Pdf'
import './Legal.css'
import Campaign from './Campaign'
import Info from '../Home/Info'
import Menu from '../Home/Menu'

export default function Legal() {
    return (
        <div>
            <Menu/>
            <Main/>
            <Pdf/>
            <Campaign/>
            <Info/>
        </div>
    )
}
