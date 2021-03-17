import React from 'react'; 
import ContactMap from './ContactMap/ContactMap';
import './contact.scss';

export function Contact () {

    const action = 'https://formspree.io/f/xrgonebr';
    return(
        <section className="container-contact">
            <form id="contactform" action={action} method="POST">
                <label>
                    <input type="text" placeholder="Nombre" require></input>
                </label>
                <label>
                    <input type="email" placeholder="email" name="_replyto" require></input>
                </label>
                <label>
                    <input type="text" placeholder="Número de teléfono"></input>
                </label>
                <textarea placeholder="mensaje" name="message" require></textarea>
                <input className="buttonform" type="submit" value="Enviar"></input>
                <input type="hidden" name="_next" value="http://localhost:3000/" />
                <input type="hidden" name="_subject" value="Website contact" />
                <input type="text" name="_gotcha" style={{"display":"none"}} />
            </form>
        
            <ContactMap />
        </section>
    )
}