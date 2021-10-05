import React from 'react'
import styles from '../components/styles/slide2.module.css'
import providusbank from '../../public/providus.png'
import mansard from '../../public/mansard.png'
import paystack from '../../public/paystack.png'
import exalt from '../../public/exalt.png'
import aws from '../../public/aws.png'


export default function Slide2(){
    return(
    <div className={styles.whole}>
        <div className={styles.textl}>
         Our Partners 
        </div>
        <div className={styles.logo}>
           
           <ul>
               <li><img src={providusbank} alt='logo1'/></li>
               <li><img src={mansard} alt='logo2' /> </li>
               <li><img src={paystack}  alt='logo3'/> </li>
               <li><img src={exalt} alt='logo4' /> </li>
           </ul>
        </div>
               
            
    </div>
           
                
    )
}