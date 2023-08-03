import React from 'react'
import Main from './Main'
import Portfolio from './Portfolio'
import Offer from './Offer'
import Info from './Info'
import Menu from './Menu'

export default function Home() {
    return (
        <div>
            <Menu/>
            <Main/>
            <Portfolio/>
            <Offer/>
            <Info/>
        </div>
    )
}
