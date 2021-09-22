import React from "react";
import styles from '../components/styles/slide5.module.css'
import { BiLaptop } from 'react-icons/bi'
import { MdPhoneIphone } from 'react-icons/md'
import image8 from '../../public/asa.jpg'


export default function Slide5(){
    return(
        <div className={styles.container}>
        <div className={styles.hr}>
            <hr /> 
        </div>
     <div className={styles.row}>
         <div className={styles.text}>
            <h1>Get onboard with our innovative<br /> solutions that help logistics<br /> business thrive </h1>
            <div className={styles.icon}>
            <BiLaptop  size={100}/>
            </div>
            <div className={styles.coperate}>
            <h2>Coperate Dashboard</h2>
            <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
            <div className={styles.icona}>
            <MdPhoneIphone  size={100}/>
            </div>
            <div className={styles.coperateb}>
            <h2>Truck Geolocation App</h2>
            <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
           
            
            
         </div>
         
         <div className={styles.Img}>
             <div className={styles.imgbox}>
                  <img src={image8} />  
                
             </div>

         </div>




     </div>

 </div>
    )
}