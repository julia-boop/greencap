import React from 'react'
import MainContact from './MainContact'
import Form from './ContactForm'
import Footer from '../Product/ProductFooter'
import './Contact.css'
import Menu from '../Home/Menu'

export default function Contact() {
    return (
        <div>
            <Menu/>
            <MainContact/>
            <Form/>
            <Footer/>
        </div>
    )
}
