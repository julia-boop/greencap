import React from 'react'
import MainUs from './MainUs'
import Solution from './Solution'
import History from './History'
import Client from './Client'
import Team from './Team'
import Info from '../Home/Info'
import Menu from '../Home/Menu'

export default function Us() {
    return (
        <div>
            <Menu/>
            <MainUs/>
            <Solution/>
            <History/>
            <Client/>
            <Team/>
            <Info/>
        </div>
    )
}
