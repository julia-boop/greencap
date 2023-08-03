import React from 'react'
import MainUs from './MainUs'
import Solution from './Solution'
import History from './History'
import Client from './Client'
import Team from './Team'
import Info from '../Home/Info'

export default function Us() {
    return (
        <div>
            <MainUs/>
            <Solution/>
            <History/>
            <Client/>
            <Team/>
            <Info/>
        </div>
    )
}
