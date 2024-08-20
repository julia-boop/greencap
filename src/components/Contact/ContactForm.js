import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css'
import {useTranslation} from 'react-i18next';

export default function ContactForm() {
    const {t} = useTranslation();

    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_lseo5eu', 'template_wuh3zb1', e.target, 'WoOPfiDngDs7OjasI')
        .then((result) => {
            let succesmsg = document.querySelector('.success-msg')
            let formsent = document.querySelector('form')
            succesmsg.innerHTML = '<p>El mensaje ha sido enviado con éxito</p>'
            console.log(e.target.elements);
            formsent.reset()
            
        }, (error) => {
            console.log(error.text);
        }).then(() => {
            setTimeout(() => {
                let succesmsgsent = document.querySelector('.success-msg')
                succesmsgsent.innerHTML = ''
            }, 3000)
        })
    };

    return (
        <div className="form-main-container">
            <div className="form-title-container">
                <h5>{t('form.label')}</h5>
                <h1>{t('form.title')}</h1>
            </div>
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="success-msg"></div>
                    <input type="text" name="name" placeholder={t('form.name')}></input>
                    <input type="email" name="email" placeholder={t('form.email')}></input>
                    <input type="phone" name="phone" placeholder={t('form.phone')}></input>
                    <textarea type="text" name="message" placeholder={t('form.msg')}></textarea>
                    <div className="btn-form">
                        <button type="submit">{t('form.send')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
