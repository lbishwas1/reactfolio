import React from 'react'
import Style from './Intro.module.css'
import pp from '../img/pp.JPG'


export default function Intro(props) {
    return (
    <div className={Style.intro}>
         <img src={pp} className={Style.pp} alt="" />
         <p className={Style.title}>Bishwas Lamsal</p>
         <p className={Style.desc}>I'm a web developer</p>
         <div className={Style.social}>
         <i className="fa fa-facebook"></i>
         <i className="fa fa-instagram"></i>
         <i className="fa fa-twitter"></i>
         <i className="fa fa-behance"></i>
         <i className="fa fa-dribbble"></i>
    </div>
         <button>Hire me</button>
    
    <div className={Style.mousedown}>
        <div className={Style.bullet}>
        </div>
    </div>


     </div>
    );
  }