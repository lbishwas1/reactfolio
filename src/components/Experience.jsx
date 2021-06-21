import React from 'react'
import Style from './Experience.module.css'




export default function Experience() {
    return (
    <>
    <h2>Experience</h2>
        <div className={Style.experience}>
                
            <div className={Style.excard}>
                    <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap haticon"></i>

            <p className={Style.date}>2075-Present(2018-Present)</p>
            </div>
                <div className={Style.excontent}>
               
                       
                        <h3 className={Style.title}>Computer Engineering Degree</h3>
                        <p>Expecting the degree in 2022.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap haticon"></i>

            <p className={Style.date}>2073-2075(2017-2018)</p>
            </div>
                <div className={Style.excontent}>
                        
                        <h3 className={Style.title}>High School Degree</h3>
                        <p>Passed with A grade.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap haticon"></i>

            <p className={Style.date}>2073(2017)</p>
            </div>
                <div className={Style.excontent}>
                      
                        <h3 className={Style.title}>SLC Graduated</h3>
                        <p>Passed with A grade.</p>
                </div>
            </div>
            <div className={Style.excard}>
                    <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap haticon"></i>

            <p className={Style.date}>2078-Present(2021-Present)</p>
            </div>
                <div className={Style.excontent}>
               
                       
                        <h3 className={Style.title}>Software Developer</h3>
                        <p>Working as software developer.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap haticon "></i>

            <p className={Style.date}>2076-Present(2019-Present)</p>
            </div>
                <div className={Style.excontent}>
                        
                        <h3 className={Style.title}>Web Developer</h3>
                        <p>Working as Web Developer from last two years.</p>
                </div>
                <div className={Style.hatdate}>
            <i class="fa fa-graduation-cap haticon"></i>

            <p className={Style.date}>2075-Present(2018-Present)</p>
            </div>
                <div className={Style.excontent}>
                      
                        <h3 className={Style.title}>Freelancer</h3>
                        <p>Freelancer since 2075(2018)</p>
                </div>
            
            </div>
        </div>
        </>
    );
  }
  