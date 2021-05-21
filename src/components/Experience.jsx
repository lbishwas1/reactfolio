import React from 'react'
import Style from './Experience.module.css'




export default function Experience() {
    return (
    <>
    <h2>Experience</h2>
        <div className={Style.experience}>
                
            <div className={Style.excard}>
                    <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap"></i>

            <p className={Style.date}>2075-Present</p>
            </div>
                <div className={Style.excontent}>
               
                       
                        <h3 className={Style.title}>Engineering degree</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap"></i>

            <p className={Style.date}>2073-2075</p>
            </div>
                <div className={Style.excontent}>
                        
                        <h3 className={Style.title}>High School Degree</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap"></i>

            <p className={Style.date}>2073</p>
            </div>
                <div className={Style.excontent}>
                      
                        <h3 className={Style.title}>SLC Graduated</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                </div>
            </div>
            <div className={Style.excard}>
                    <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap"></i>

            <p className={Style.date}>2076-Present</p>
            </div>
                <div className={Style.excontent}>
               
                       
                        <h3 className={Style.title}>Sr. Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap"></i>

            <p className={Style.date}>2070-2076</p>
            </div>
                <div className={Style.excontent}>
                        
                        <h3 className={Style.title}>Jr. Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap"></i>

            <p className={Style.date}>2068-1070</p>
            </div>
                <div className={Style.excontent}>
                      
                        <h3 className={Style.title}>Internship</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                </div>
            
            </div>
        </div>
        </>
    );
  }
  