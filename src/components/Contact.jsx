import React from 'react'
import Style from './Contact.module.css'



export default function Contact(props) {
    return (
        <>
        <h2>GET IN TOUCH</h2>
    <div className={Style.contact}>
        
            <h5>Let's talk Everything</h5>
            <p>Don't like forms ? Send me an email.</p>
        <div>
            <form  className={Style.form} action="">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email"/>
                <input type="text" placeholder="Subject" />
                <input type="textarea" placeholder="Message" />
            </form>
            <button>Send</button>
            </div>
    </div>
    </>
    );
  }