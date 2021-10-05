import React from "react";
import styles from '../components/styles/slide9.module.css'

export default function  Slide7(){
    return(
        <div className={styles.container}>
     
            <div className={styles.text}>
               <h1>Get In Touch With Us.</h1>
               <p>Have a complaint  or just need help in any of our services.<br /> Just fill out the form below and you will recive a reply soonest</p>
                   <p>Name</p>
                   <input />
                   <p>Email Address</p>
                   <input />
                   <p>Mesage</p>
                   <div className={styles.input3}> 
                   <input id="upload-button"  />
                   
                   </div>
                   <button>Submit</button>
                  
                  
               
            </div>
            <div className={styles.Img}>
                <div className={styles.imgbox}>
                    <p>Lagos Nigeria Office<br /> 11  Olaide Tomori Street, Ikeja Lagos, Nigeria</p>
                    <p><span>P:</span> 0903839220</p>
                    <p><span>E:</span> support@exaltlogistics.com</p>
                   
                </div>

            </div>




        

    </div>  
    )
}