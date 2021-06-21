import React from 'react'
import Style from './Services.module.css'




export default function Services(props) {
    return (
      <>
      <h2> Services</h2>
   <div className={Style.services}>
    
    
     <div className={Style.card}>
      
       <div className={Style.cc}>
       <i className="fa fa-tint fa-3x"></i>
       <h3>UI/UX design</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, saepe?</p>
       </div>
     </div>
     <div className={Style.card}>
    
       <div className={Style.cc}>
       <i className="fa fa-code fa-3x"></i>
       <h3>Web Development</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, saepe?</p>
       </div>
       </div>
     <div className={Style.card}>
       
       <div className={Style.cc}>
       <i className="fa fa-mobile fa-3x"></i>
       <h3>App Development</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, saepe?</p>
       </div>
       </div>
       </div>
    

   </>
    );
  }