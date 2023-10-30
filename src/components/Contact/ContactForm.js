import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css'

export default function ContactForm() {
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
                <h5>CONTACTO</h5>
                <h1>Contáctenos</h1>
            </div>
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="success-msg"></div>
                    <input type="text" name="name" placeholder="Nombre"></input>
                    <input type="email" name="email" placeholder="E-mail"></input>
                    <input type="phone" name="phone" placeholder="Telefono"></input>
                    <textarea type="text" name="message" placeholder="Mensaje"></textarea>
                    <div className="btn-form">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
