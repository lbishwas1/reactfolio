import React from 'react'
import Style from './Recent.module.css'



export default function Recent(props) {
    return (
        <>
        <h2>Recent Projects</h2>
     <div className={Style.recent}>
      {/* <ul className={Style.category}>
            <li>All</li>
            <li>Art</li>
            <li>Branding</li>
            <li>Creatives</li>
    </ul>*/}
       <div className={Style.recentcard}>
           <div className={Style.recentcontainer}>

           <div className={Style.recentitem}>
               

</div>

<div className={Style.recentitem}>
               

               </div>
               
           <div className={Style.recentitem}>
               

               </div>
               
           <div className={Style.recentitem}>
               

               </div>
               
           <div className={Style.recentitem}>
               

               </div>
               
           <div className={Style.recentitem}>
               

               </div>
           </div>
           
       </div>
     
        </div>
        </>
    );
  }