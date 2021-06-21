import React from 'react'
import Style from './Contact.module.css'
import emailjs from 'emailjs-com'


export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gm1wiju', 'template_7upd15i', e.target, '/*user_6pEioXadEeyWYUunHcxaG*/')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
        <>
        <h2>GET IN TOUCH</h2>
    <div className={Style.contact}>
        
            <h5>Let's talk Everything</h5>
            <p>Don't like forms ? Send me an email.</p>
        <div>
            <form onSubmit={sendEmail} className={Style.form} >
                <input type="text" placeholder="Your Name" name="from_name" />
                <input type="email" placeholder="Your Email" name="email"/>
                <input type="number" placeholder="Your Phone" name="phone" />
                <input type="textarea" placeholder="Message" name="message"/>
              <button type="submit" value="Send">Send</button>
            </form>
    
            </div>
    </div>
    </>
    );
  }