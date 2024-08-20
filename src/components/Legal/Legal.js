import React from 'react'
import Main from './MainLegal'
import Pdf from './Pdf'
// import Campaign from './Campaign'
import Info from '../Home/Info'
import Menu from '../Home/Menu'
import Balances from './Balances'

export default function Legal() {
    return (
        <div>
            <Menu/>
            <Main/>
            <Pdf/>
            {/* <Campaign/> */}
            <Balances/>
            <Info/>
        </div>
    )
}
