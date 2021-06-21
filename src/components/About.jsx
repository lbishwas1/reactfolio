import React from 'react'
import Style from './About.module.css'
import CountUp from 'react-countup';
import {Link} from 'react-router-dom'



export default function About() {
    return (
    
        <>
       

    <div className={Style.about}>
    <h2>About me</h2>
    <div className={Style.container}>
    <div className={Style.all}>
        <div className={Style.desc}>
        <p>I am a Nepal based web developer, specialising in Front-End Development.
            I enjoy web development, tools, and processes. More importantly, I like looking at ways to improve 
            collaboration and improving communication; I love community and people. <Link to='/'>Read more</Link></p>
          <div className={Style.myprogress}>
        
    {/*    <div className={Style.num}>
            <i className="fa fa-thumbs-up fa-2x det"></i>
            <h3><CountUp end={198} /></h3>
            
            <p>Projects Completed</p>
            
            </div>
            <div className={Style.num}>
            <i className="fa fa-coffee fa-2x det"></i>
            <h3><CountUp end={6208} /></h3>
            
            <p>Cups of coffee</p>
            
            </div>
            <div className={Style.num}>
            <i className="fa fa-user fa-2x det"></i>
            <h3><CountUp end={40} /></h3>
            
            <p>Satisfied Clients</p>
            
            </div>
    
            <div className={Style.num}>
            <i className="fa fa-certificate fa-2x det"></i>
            <h3><CountUp end={15} /></h3>
        
            <p>Awards</p>
            
            </div>
                */}
    </div>
    
        <h2>My Skills</h2>
        <div className={Style.bar}>
            
        <h1><i class="devicon-c-line skilli skilli"></i></h1>
        <h1><i class="devicon-cplusplus-line skilli"></i></h1>
        <h1><i class="devicon-matlab-plain skilli"></i></h1>
        <h1><i class="devicon-react-original skilli"></i></h1>
        <h1> <i class="devicon-git-plain skilli"></i></h1>
        <h1><i class="devicon-wordpress-plain skilli"></i></h1>
        <h1><i class="devicon-bootstrap-plain skilli"></i></h1>
        <h1><i class="devicon-materialui-plain skilli"></i></h1>
        <h1><i class="devicon-html5-plain skilli"></i></h1>
        <h1><i class="devicon-css3-plain skilli"></i></h1>
        <h1><i class="devicon-photoshop-plain skilli"></i></h1>
        <h1> <i class="devicon-illustrator-plain skilli"></i></h1>
        </div>
       
        </div>
        

    </div>

    </div>
   
<button>GET CV</button>
    </div>
</>
    );
  }