import React from 'react'
import MainFaqs from './MainFaqs'
import AccFaqs from './AccFaqs'
import Info from '../Home/Info'
import './Faqs.css'
import Menu from '../Home/Menu'


export default function Faqs() {
    return (
        <div>
            <Menu/>
            <MainFaqs/>
            <AccFaqs/>
            <Info/>
        </div>
    )
}
