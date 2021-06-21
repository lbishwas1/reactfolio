import React from 'react'
import Style from './Intro.module.css'
import {Link} from 'react-router-dom'

export default function Intro(props) {
    return (
    <div className={Style.intro}>
         <img src="img/pp.JPG" className={Style.pp} alt="" />
         <p className={Style.title}>Bishwas Lamsal</p>
         <p className={Style.desc}>I'm a web developer</p>
         <div className={Style.social}>
         <Link to='//facebook.com' target="_blank" className={Style.link}><i className="fa fa-facebook"></i></Link>
         <Link to='//instagram.com' target="_blank" className={Style.link}><i className="fa fa-instagram"></i></Link>
         <Link to='//twitter.com' target="_blank" className={Style.link}><i className="fa fa-twitter"></i></Link>
         {/*<i className="fa fa-behance"></i>
         <i className="fa fa-dribbble"></i>*/}
    </div>
         <button> <Link to="//www.upwork.com/freelancers/~01b22dd9dd9082bb88" target="_blank" className={Style.link}>Hire me</Link> </button>
    
    <div className={Style.mousedown}>
        <div className={Style.bullet}>
        </div>
    </div>


     </div>
    );
  }