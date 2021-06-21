import React from 'react'
import Style from './Recent.module.css'
import data from '../projects/projects'
import { useState } from 'react';
import { filter } from 'async';
const Recent =()=>{

    const [visible, setVisible] = useState(6);
    const loadMore= () =>{
        setVisible(visible+3);
    }
    const [items, setItems] = useState(data);
    
    const filterItem = (categItem) => {
        const updatedItems = data.filter((curElem) => {
            return curElem.language === categItem;
        });

        setItems(updatedItems);
     
    }
    console.log(items[0])
  const slice= items.slice(0,visible);
    return (
        <>
        <h2>Recent Projects</h2>
     <div className={Style.recent}>
      <ul className={Style.category}>
            <li onClick={() => setItems(data)}>All</li>
            <li onClick={() => filterItem('Bootstrap')}>Bootstrap</li>
            <li onClick={() => filterItem('CSS')}>CSS</li>
            <li onClick={() => filterItem('javascript')}>Javascript</li>
    </ul>
       <div className={Style.recentcard}>
           <div className={Style.recentcontainer}>

{slice.map((item)=>{
    const {title,image,details,language}=item;
    return(
<div className={Style.recentitem}>
    
    <img src={image} alt="" className={Style.recentproject}/>
    <div className={Style.toi}>
    <h2>{title}</h2>
  <p>This project was made using {details}.</p>
    </div>
               </div>
    )
})}

               
          
           </div>
           <button onClick={()=> loadMore()}>Load more</button>
       </div>

        </div>
        
        </>
    );
  }
  export default Recent;